require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cookieParser = require('cookie-parser');
const { verify } = require('jsonwebtoken');
const path = require('path');
const session = require('express-session');

const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const MongoStore = require('connect-mongo');
const mongooseConnection = require('./config/connection');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const dbURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/ArcadeDex';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: dbURL,
    collectionName: 'sessions'
  })
}));

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  app.use(
    '/graphql',
    express.json(),
    cookieParser(),
    expressMiddleware(server, {
      context: ({ req, res }) => {
        const token = req.cookies.token;
        let user_id = null;

        if (token) {
          try {
            const { user_id: id } = verify(token, process.env.JWT_SECRET);

            user_id = id;
          } catch (error) {
            console.log('token verification error', error);
          }
        }

        return {
          user_id,
          req,
          res
        }
      }
    })
  );

  // Configure passport-steam
  passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/auth/steam/return',
    realm: 'http://localhost:3001/',
    apiKey: process.env.STEAM_KEY,
  }, (identifier, profile, done) => {
    // In a real application, you would save the user profile to your database here
    console.log(profile)
    return done(null, profile);
  }));
  // Serialize user into the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  // Deserialize user from the session
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  app.get('/', (req, res) => {
    console.log(req)
    res.send(req.isAuthenticated() ? req.user.displayName : 'Logged out');
  });

  app.get('/auth/steam',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
      // The request will be redirected to Steam for authentication, so this
      // function will not be called.
    });
  app.get('/auth/steam/return',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/');
    });
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  if (process.env.PORT) {
    app.use(express.static('../client/dist'));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log('Express server running on port', PORT);
      console.log('GraphQL ready at /graphql');
    });
  });
}

startServer();
