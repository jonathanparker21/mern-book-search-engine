const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedBooks: [bookSchema]
  }

  type Book {
    _id: ID!
    authors: 
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(): User
    removeBook(bookId: String!): User
    
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(bookId: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;