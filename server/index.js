import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolves";

const typeDefs = `
  type Movie {
    id: Int!
    title: String!
    rating: Float
    description_into: String
    language: String
    medium_cover_image: String
    genres: [String]
  }

  type Query {
    movies(limt: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
`;

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("✔ Graphql Server Running."));
