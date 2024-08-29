const gql = String.raw;

const typeDefs = gql`
  type User {
    username: String
    email: String
    gamerTags: String
}

  type Game {
    name: String
    platform: String
    genre: String
    releaseDate: String
}

  type AuthResponse {
    message: String
    user: User
}

  type Query {
    getUser:  AuthResponse
    getUserGames: [Game]
}

  type Mutation {
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse

    addGame(name: String, platform: String, genre: String, releaseDate: String): AuthResponse
}
`
module.exports = typeDefs;
