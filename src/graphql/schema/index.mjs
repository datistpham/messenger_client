import { gql } from "apollo-server-express"
export const typeDefs = gql `
    type User {
        id: ID!,
        firstname: String!,
        surname: String, 
        date: Int, 
        month: Int, 
        year: Int, 
        age: Int,
        phonenumber: String,
        email: String,
        gender: String,
        password: String,
        avatar: String
    }
    type Query {
        user(id: ID): User
        userListMessage(list: [ID]): [User]
    }
    type Mutation {
        createUser(
            id: ID ,
            firstname: String,
            surname: String, 
            date: Int, 
            month: Int, 
            year: Int, 
            age: Int,
            phonenumber: String,
            email: String,
            gender: String,
            password: String,
            avatar: String
        ): User
    }
`