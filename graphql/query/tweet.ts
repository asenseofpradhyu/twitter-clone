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

export const getSignedURLForTweetQuery = graphql(`#graphql

query getSignedURL($imageName: String!, $imageType: String!) {
  getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
}

`)