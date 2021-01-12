'use stric';

const con  = require('../../db')

module.exports = {
    Person: `
    type Person {
        _id: ID!
        nombre: String
        apellido: String
    }`,
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