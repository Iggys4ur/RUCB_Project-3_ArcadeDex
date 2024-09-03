const gql = String.raw;

const typeDefs = gql`
  type User {
    username: String
    email: String
    friends: [Friend]
    steamAccount: SteamAccount
}

  type Friend {
    _id: ID
    username: String
    email: String
    steamAccount: SteamAccount
}

  type AuthResponse {
    message: String
    user: User
}
  
  type SteamAccount {
      steamId: ID
      personaName: String
      avatarLink: String
}

  type Query {
    getUser:  AuthResponse
    getUserFriends: [Friend]
}

  type Mutation {
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse

    editUsername(username: String): AuthResponse

    addFriend(username: String): AuthResponse
    deleteFriend(username: String): AuthResponse
}
`
module.exports = typeDefs;
