import { graphql } from "../../gql";

export const verifyUserGoogleOAuthTokenQuery = graphql(`
#graphql
query verifyUserGoogleOAuthToken($token: String!){
         verifyGoogleToken(token: $token)
    }
`)