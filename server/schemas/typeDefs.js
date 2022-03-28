const { gql } = require('apollo-server-express');

//Authors might need to be an object or something
const typeDefs =gql`
    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String
        email: String
        savedBooks: [Book]
    }

    type Query {
        book: [Book]
        users(_id: String): [User]
    }

    type Mutation {
        getSingleUser(username: String!, email: String!): User
        createUser(username: String!, email: String!, password: String!) : User
        login(username: String!, email: String!, password: String!): User
        saveBook(username: String!, email: String!, password: String!): Users
        deleteBook(username: String!, email: String!, password: String!): User
    }
`

module.exports = typeDefs;