import { GraphQLClient } from 'graphql-request';


const isClient = typeof window !== "undefined";
console.log(isClient);
export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem("X-Auth-Token")}` : "",
    }),
});