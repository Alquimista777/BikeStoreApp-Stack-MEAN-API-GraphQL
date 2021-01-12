'use stric'

const Conexion = require('../../db')

module.exports = {
    Query: `
    type Query {

    "get people"
        getPeople: [Person]

    "get bikes"
        getBikes: [Bike]
    }`,

    resolversQuery: {
        Query:  {
            getPeople: async () => await Conexion.db.collection('people').find().toArray()
        }
    }
}
