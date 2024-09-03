import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      message
      user {
        email
        username
      }
    }
  }
`

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
    }
  }
`

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String, $email: String, $password: String) {
    registerUser(username: $username, email: $email, password: $password) {
      user {
        email
        username
      }
      message
    }
  }
`

export const ADD_FRIEND = gql`
  mutation AddFriend($username: String) {
    addFriend(username: $username) {
      user {
        username
        steamAccount {
          avatarLink
          personaName
          steamId
        }
      }
      message
    }
  }
`

export const DELETE_FRIEND = gql`
  mutation DeleteFriend($username: String) {
    deleteFriend(username: $username) {
      message
    }
  }
`

export const EDIT_USERNAME = gql`
  mutation EditUsername($username: String) {
    editUsername(username: $username) {
      message
    }
  }
`
