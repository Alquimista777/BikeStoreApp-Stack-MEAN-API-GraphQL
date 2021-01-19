'use stric';

const Conexion  = require('../../../../db')
const { gql } = require('apollo-server-express')

    const typeDefs = gql`
    type Person {
        _id: ID!
        nombre: String
        apellido: String
    }

    input PersonInput {
        nombre: String
        apellido: String
    },

    type Query {
    "get people"
        getPeople: [Person]
    },
    
    type Mutation {
        "Create person"
        createPerson(input: PersonInput!): Person

        "Update person by Id"
        updatePersonById(id: ID!, input: PersonInput! ): Person
    }`

    const resolvers =  {
        Mutation: {
            createPerson: async (root, { input }) => {
                const { ops } = await Conexion.db.collection('people').insertOne(input)
                const [inputInserted] = ops
                return inputInserted
             }
        },
        Query:  {
            getPeople: async () => await Conexion.db.collection('people').find().toArray()
        }
    }


module.exports = {
    typeDefs,
    resolvers
}

// export const resolversPerson = {
//     // Person: {
//     //     bikes: async ({ bikes }) => {
//     //     if (bikes) {
//     //         const ids = bikes.length > 0 ? bikes.map(id => ObjectID(id)) : []
            
//     //     }
//     //  }
//     // }
// }