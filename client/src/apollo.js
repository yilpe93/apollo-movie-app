import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers: {
    // client, 초기 Data binding
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: cache.identify({
            __typename: "Movie",
            id,
          }),
          fields: {
            isLiked: (liked) => !liked,
          },
        });
      },
    },
  },
});

export default client;
