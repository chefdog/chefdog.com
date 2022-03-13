import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
});

export default Client