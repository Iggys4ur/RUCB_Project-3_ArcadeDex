// src/graphql/queries.js

import { gql } from '@apollo/client';

export const USER_DATA_QUERY = gql`
  query getUserData {
    user {
      id
      name
      email
    }
  }
`;

export const ACHIEVEMENTS_QUERY = gql`
  query getAchievements {
    achievements {
      id
      title
      description
    }
  }
`;

export const GAMES_QUERY = gql`
  query getGames {
    games {
      id
      name
      genre
    }
  }
`;

export const FRIENDS_ACTIVITY_QUERY = gql`
  query getFriendsActivity {
    friendActivities {
      id
      description
      timestamp
    }
  }
`;
