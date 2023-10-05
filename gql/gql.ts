/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n    tweetID\n  }\n}\n\n": types.CreateTweetDocument,
    "\n#graphql\n    query GetAllTweets {\n          getAllTweets {\n            content\n            tweetID\n            imageURL\n            tweetUser {\n                profileImageURl\n                firstName\n                lastName\n    }\n    \n  }\n}\n\n": types.GetAllTweetsDocument,
    "\n#graphql\nquery verifyUserGoogleOAuthToken($token: String!){\n         verifyGoogleToken(token: $token)\n    }\n\n": types.VerifyUserGoogleOAuthTokenDocument,
    "\n#graphql\n    query GetCurrentUser {\n      getCurrentUser {\n            id\n          lastName\n          email\n          firstName\n          profileImageURl\n          tweets {\n            tweetID\n            content\n            tweetUser{\n              id\n              firstName\n              lastName\n              email\n              profileImageURl\n            }\n          }\n          \n  }\n}\n\n": types.GetCurrentUserDocument,
    "\n#graphql\n query GetUserByID($id: ID!) {\n  getUserByID(id: $id) {\n    id\n    firstName\n    lastName\n    profileImageURl\n    tweets {\n      content\n      tweetID\n      tweetUser {\n        id\n        firstName\n        lastName\n        profileImageURl\n      }\n    }\n  }\n}\n\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n    tweetID\n  }\n}\n\n"): (typeof documents)["\n#graphql\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n    tweetID\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n    query GetAllTweets {\n          getAllTweets {\n            content\n            tweetID\n            imageURL\n            tweetUser {\n                profileImageURl\n                firstName\n                lastName\n    }\n    \n  }\n}\n\n"): (typeof documents)["\n#graphql\n    query GetAllTweets {\n          getAllTweets {\n            content\n            tweetID\n            imageURL\n            tweetUser {\n                profileImageURl\n                firstName\n                lastName\n    }\n    \n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\nquery verifyUserGoogleOAuthToken($token: String!){\n         verifyGoogleToken(token: $token)\n    }\n\n"): (typeof documents)["\n#graphql\nquery verifyUserGoogleOAuthToken($token: String!){\n         verifyGoogleToken(token: $token)\n    }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n    query GetCurrentUser {\n      getCurrentUser {\n            id\n          lastName\n          email\n          firstName\n          profileImageURl\n          tweets {\n            tweetID\n            content\n            tweetUser{\n              id\n              firstName\n              lastName\n              email\n              profileImageURl\n            }\n          }\n          \n  }\n}\n\n"): (typeof documents)["\n#graphql\n    query GetCurrentUser {\n      getCurrentUser {\n            id\n          lastName\n          email\n          firstName\n          profileImageURl\n          tweets {\n            tweetID\n            content\n            tweetUser{\n              id\n              firstName\n              lastName\n              email\n              profileImageURl\n            }\n          }\n          \n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n query GetUserByID($id: ID!) {\n  getUserByID(id: $id) {\n    id\n    firstName\n    lastName\n    profileImageURl\n    tweets {\n      content\n      tweetID\n      tweetUser {\n        id\n        firstName\n        lastName\n        profileImageURl\n      }\n    }\n  }\n}\n\n"): (typeof documents)["\n#graphql\n query GetUserByID($id: ID!) {\n  getUserByID(id: $id) {\n    id\n    firstName\n    lastName\n    profileImageURl\n    tweets {\n      content\n      tweetID\n      tweetUser {\n        id\n        firstName\n        lastName\n        profileImageURl\n      }\n    }\n  }\n}\n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;