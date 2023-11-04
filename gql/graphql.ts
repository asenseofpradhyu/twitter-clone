/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTweetData = {
  content: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet?: Maybe<Tweet>;
  followUser?: Maybe<Scalars['Boolean']['output']>;
  unFollowUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateTweetArgs = {
  payload: CreateTweetData;
};


export type MutationFollowUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnFollowUserArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllTweets?: Maybe<Array<Maybe<Tweet>>>;
  getCurrentUser?: Maybe<User>;
  getSignedURLForTweet?: Maybe<Scalars['String']['output']>;
  getUserByID?: Maybe<User>;
  verifyGoogleToken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetSignedUrlForTweetArgs = {
  imageName: Scalars['String']['input'];
  imageType: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVerifyGoogleTokenArgs = {
  token: Scalars['String']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  content: Scalars['String']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  tweetID: Scalars['ID']['output'];
  tweetUser?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<Maybe<User>>>;
  followings?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileImageURl?: Maybe<Scalars['String']['output']>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};

export type CreateTweetMutationVariables = Exact<{
  payload: CreateTweetData;
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', createTweet?: { __typename?: 'Tweet', tweetID: string } | null };

export type FollowUserMutationVariables = Exact<{
  to: Scalars['ID']['input'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: boolean | null };

export type UnFollowUserMutationVariables = Exact<{
  to: Scalars['ID']['input'];
}>;


export type UnFollowUserMutation = { __typename?: 'Mutation', unFollowUser?: boolean | null };

export type GetAllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTweetsQuery = { __typename?: 'Query', getAllTweets?: Array<{ __typename?: 'Tweet', content: string, tweetID: string, imageURL?: string | null, tweetUser?: { __typename?: 'User', profileImageURl?: string | null, firstName: string, lastName?: string | null } | null } | null> | null };

export type GetSignedUrlQueryVariables = Exact<{
  imageName: Scalars['String']['input'];
  imageType: Scalars['String']['input'];
}>;


export type GetSignedUrlQuery = { __typename?: 'Query', getSignedURLForTweet?: string | null };

export type VerifyUserGoogleOAuthTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyUserGoogleOAuthTokenQuery = { __typename?: 'Query', verifyGoogleToken?: string | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', id: string, lastName?: string | null, email: string, firstName: string, profileImageURl?: string | null, tweets?: Array<{ __typename?: 'Tweet', tweetID: string, content: string, tweetUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, profileImageURl?: string | null } | null } | null> | null } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserByID?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, profileImageURl?: string | null, followers?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, profileImageURl?: string | null } | null> | null, followings?: Array<{ __typename?: 'User', id: string, firstName: string, lastName?: string | null, profileImageURl?: string | null } | null> | null, tweets?: Array<{ __typename?: 'Tweet', content: string, tweetID: string, tweetUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, profileImageURl?: string | null } | null } | null> | null } | null };


export const CreateTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTweetData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweetID"}}]}}]}}]} as unknown as DocumentNode<CreateTweetMutation, CreateTweetMutationVariables>;
export const FollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"followUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const UnFollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnFollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unFollowUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}]}]}}]} as unknown as DocumentNode<UnFollowUserMutation, UnFollowUserMutationVariables>;
export const GetAllTweetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tweetID"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"tweetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTweetsQuery, GetAllTweetsQueryVariables>;
export const GetSignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSignedURL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSignedURLForTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageType"}}}]}]}}]} as unknown as DocumentNode<GetSignedUrlQuery, GetSignedUrlQueryVariables>;
export const VerifyUserGoogleOAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"verifyUserGoogleOAuthToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyGoogleToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<VerifyUserGoogleOAuthTokenQuery, VerifyUserGoogleOAuthTokenQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}},{"kind":"Field","name":{"kind":"Name","value":"tweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweetID"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tweetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserByID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tweetID"}},{"kind":"Field","name":{"kind":"Name","value":"tweetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;