import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    getUser {
      user {
        username
        email
      }
    }
  }
`

export const GET_USER_FRIENDS = gql`
  query GetUserFriends {
    getUserFriends {
      _id
      email
      username
      steamAccount {
        avatarLink
        personaName
        steamId
      }
    }
  }
`
