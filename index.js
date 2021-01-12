'use stric'

require('dotenv').config()
const cors = require('cors')
const { join } = require('path')
const morgan = require('morgan')
const { readFileSync } = require('fs')
const { merge } = require('lodash')

const app = require('express')() // App Init
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')


// Variables
app.set('port', process.env.PORT || 3000)

// conf views
app.set('view engie', 'ejs')
app.set('views', join(__dirname + 'src/views'))

// directories
const home = require('./src/routes/home.route')

// middlewares
app.use(cors())
app.use(morgan('dev'))

// Schema GraphQl
const { Bike } = require('./src/lib/bikes')
const { Person } = require('./src/lib/person')
const { Query, resolversQuery }  = require('./src/lib/queries')

const schema = makeExecutableSchema({ 
    typeDefs: [Person, Bike, Query], 
    resolvers: resolversQuery
 })

// Routes
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolversQuery,
    graphiql: true
}))



const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor live in port ${port}`);
})