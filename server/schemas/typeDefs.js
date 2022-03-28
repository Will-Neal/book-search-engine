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
`

module.exports = typeDefs;