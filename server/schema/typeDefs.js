const gql = String.raw;

const typeDefs = gql`
  type User {
    username: String
    email: String
    linkedAccounts: String
    userUUID: UUID
    userLevel: Int
}

  type Account {
    user: String
    steamId: Int
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

    addAccount: AuthResponse
}

//   type Friend {
//     friendName: String
//     friendUUID: UUID
//     friendLevel: Int
//     dateAdded: String
// }
`
module.exports = typeDefs;
