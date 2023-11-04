import { graphql } from "../../gql";

export const verifyUserGoogleOAuthTokenQuery = graphql(`
#graphql
query verifyUserGoogleOAuthToken($token: String!){
         verifyGoogleToken(token: $token)
    }

`)

export const GetCurrentUserQuery = graphql(`
#graphql
    query GetCurrentUser {
      getCurrentUser {
            id
          lastName
          email
          firstName
          profileImageURl
          recommendedUsers {
        id
        firstName
        lastName
        profileImageURL
      }
          tweets {
            tweetID
            content
            tweetUser{
              id
              firstName
              lastName
              email
              profileImageURl
            }
          }
          
  }
}

`)

export const GetUserByIDQuery = graphql(`
#graphql
 query GetUserByID($id: ID!) {
  getUserByID(id: $id) {
    id
    firstName
    lastName
    profileImageURl
    followers {
      id
      firstName
      lastName
      profileImageURl
    }
    followings {
      id
      firstName
      lastName
      profileImageURl
    }
    tweets {
      content
      tweetID
      tweetUser {
        id
        firstName
        lastName
        profileImageURl
      }
    }
  }
}

`)