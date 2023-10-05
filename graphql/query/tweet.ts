import {graphql} from '../../gql'

export const getAllTweetQuery = graphql(`
#graphql
    query GetAllTweets {
          getAllTweets {
            content
            tweetID
            imageURL
            tweetUser {
                profileImageURl
                firstName
                lastName
    }
    
  }
}

`);