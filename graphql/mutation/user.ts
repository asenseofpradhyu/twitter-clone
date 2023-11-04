import { graphql } from "@/gql";

export const followUserMutation = graphql(`#graphql

mutation followUser($to: ID!) {
  followUser(id:$to)
}

`);

export const unFollowUserMutation = graphql(`#graphql

mutation UnFollowUser($to: ID!) {
  unFollowUser(id:$to)
}

`);