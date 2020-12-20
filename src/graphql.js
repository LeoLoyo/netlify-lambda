// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");
const resolvers = require('./lib/resolvers');

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Category {
  _id: ID!
  title: String!
}

type Query {
  "return all caegories"
  getCategories: [Category]
  "return a caegory"
  getCategory(_id: ID!): Category
}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true
});

// server.applyMiddleware({ path: '/', cors: true });

exports.handler = server.createHandler();
