import { graphqlClient } from "@/clients/api";
import { GetCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey:['current-user'],
        queryFn: () => graphqlClient.request(GetCurrentUserQuery),
    });

    return {...query, user: query.data?.getCurrentUser}
}