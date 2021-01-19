'use stric'
const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Bike {
        _id: ID!
        marca: String
        tipo(unit: String = METER): String
    }

    input BikeInput {
        marca: String
        tipo: String
    }`

    const resolvers =  {
    //     Mutation: {
    //         createBike: async (root, { input }) => {
    //             const { ops } = await Conexion.db.collection('bikes').insertOne(input)
    //             const [inputInserted] = ops
    //             return inputInserted
    //          }
    //     },
    //     Query:  {
    //         getBikes: async () => await Conexion.db.collection('bikes').find().toArray()
    //     }
    }

    
module.exports = {
    typeDefs,
    resolvers
}


    // type Query {
    //     "get bikes"
    //     getBikes: [Bike]
    // }
    
    // type Mutation {
    //     "Create bike"
    //     createBike(input: BikeInput!): Bike

    //     "Update bike by Id"
    //     updateBikeById(id: ID!, input: BikeInput! ): Bike
    // }