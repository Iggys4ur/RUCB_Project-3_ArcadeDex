const { User, Account, Game } = require('../models');
const { sign } = require('jsonwebtoken');

const { GraphQLError } = require('graphql');

function createToken(user_id) {
  const token = sign({ user_id: user_id }, process.env.JWT_SECRET);

  return token;
}

const resolvers = {
  Query: {
    async getUser(_, args, context) {
      if (!context.user_id) {
        return {
          user: null
        }
      }

      const user = await User.findById(context.user_id).populate('friends');

      if (!user) {
        return {
          user: null
        }
      }

      return {
        user
      };
    },

    async getUserAccounts(_, args, context) {
      const user_id = context.user_id;

      if (!user_id) {
        throw new GraphQLError({
          message: 'Not Authorized'
        })
      }

      const user = await User.findById(user_id).populate('linkedAccounts');

      return user.linkedAccounts;
    },
  },

  Mutation: {
    async registerUser(_, args, context) {
      try {
        if (!context.req.user) {
          throw new GraphQLError('Steam Not Attached')
        }
        console.log(context.req.user)
        const user = await User.create({
          ...args,
          steamAccount: {
            steamId: context.req.user.id,
            personaName: context.req.user._json.personaname,
            avatarLink: context.req.user._json.avatar
          }
        });

        // Create a cookie and attach a JWT token
        const token = createToken(user._id);

        context.res.cookie('token', token, {
          httpOnly: true
        });

        return {
          message: 'User registered successfully!',
          user
        }
      } catch (error) {
        console.log('register error', error);

        if (error.code === 11000) {
          throw new GraphQLError('A user with that email address or username already exists')
        }

        throw new GraphQLError(error.message.split(':')[2].trim());
      }
    },

    async loginUser(_, args, context) {
      const user = await User.findOne({
        email: args.email
      });

      if (!user) {
        throw new GraphQLError('No user found by that email address.');
      }

      const valid_pass = await user.validatePassword(args.password);

      if (!valid_pass) {
        throw new GraphQLError('Password incorrect.');
      }

      const token = createToken(user._id); // Create a JWT

      context.res.cookie('token', token, {
        httpOnly: true
      }); // Send a cookie with the JWT attached

      return {
        message: 'Logged in successfully!',
        user
      }
    },

    logoutUser(_, args, context) {
      context.res.clearCookie('token');

      return {
        message: 'Logged out successfully'
      }
    },

    async editUsername(_, args, context) {
      const user_id = context.user_id;

      const user = await User.findOneAndUpdate({ _id: user_id }, { username: args.username });
      await user.save();

      return {
        message: 'Username Changed',
        user
      }
    },

    async addAccount(_, args, context) {
      const user_id = context.user_id;

      const user = await User.findById(user_id);
      const account = await Account.create({
        ...args,
        user: user_id
      })

      user.linkedAccounts.push(account._id);
      await user.save();

      return account;
    },

    async addFriend(_, args, context) {
      const user_id = context.user_id;

      const user = await User.findById(user_id);
      const friend = await User.findOne({ username: args.username })

      if (!friend) {
        throw new GraphQLError('No User found')
      }

      user.friends.push(friend._id);
      await user.save();

      return {
        message: 'Friend Added',
        user: friend
      }
    },

    async deleteFriend(_, args, context) {
      const user_id = context.user_id;

      const user = await User.findById(user_id);
      const friend = await User.findOne({ username: args.username })

      if (!friend) {
        throw new GraphQLError('No User found')
      }

      user.friends.pull(friend._id);
      await user.save();

      return {
        message: 'Friend Removed'
      }
    }
  }
}

module.exports = resolvers;
