const gql = String.raw;

const typeDefs = gql`
  type User {
    username: String
    email: String
    friends: [Friend]
}

  type Friend {
    username: String
    email: String
}

  type Account {
    user: String
    platformName: String
    platformId: Int
    
    personaName: String
    avatarLink: String
}

  type AuthResponse {
    message: String
    user: User
}

  type Query {
    getUser:  AuthResponse
    getUserAccounts: [Account]
}

  type Mutation {
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse

    editUsername(username: String): AuthResponse

    addAccount: AuthResponse

    addFriend(username: String): AuthResponse
    deleteFriend(username: String): AuthResponse
}
`
module.exports = typeDefs;
