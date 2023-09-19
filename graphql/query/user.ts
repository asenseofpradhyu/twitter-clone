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
  }
}

`)