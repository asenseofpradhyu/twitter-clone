import { graphqlClient } from "@/clients/api"
import { CreateTweetData } from "@/gql/graphql"
import { createTweetMutation } from "@/graphql/mutation/tweet"
import { getAllTweetQuery } from "@/graphql/query/tweet"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useGetAllTweets = () => {
    const query  = useQuery({
        queryKey:['all-tweet'],
        queryFn:() => graphqlClient.request(getAllTweetQuery)
    })

    return {query, tweets:query.data?.getAllTweets}
}


// Mutations

export const useCreateTweetMutation = () => {

        const queryClient = useQueryClient();


    const mutation = useMutation({
        mutationFn:(payload:CreateTweetData) => graphqlClient.request(createTweetMutation, {payload}),
        onMutate:() => toast.loading('Creating Tweet', {id:'1'}),
        onSuccess:async () => {
            await queryClient.invalidateQueries(['all-tweet']);
            toast.success("Tweet Created", {id:'1'})
        }
    });

    return mutation;
}