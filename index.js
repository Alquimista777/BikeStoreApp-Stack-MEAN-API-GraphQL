'use stric'

require('dotenv').config()
const cors = require('cors')
const { join } = require('path')
const morgan = require('morgan')
const { merge } = require('lodash')

const { ApolloServer } = require('apollo-server-express')

const app = require('express')() // App Init

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

// Routes
const server = new ApolloServer({ 
    modules: [
        require('./src/lib/modules/home/house'),
        require('./src/lib/modules/person/person')
    ]
 })

server.applyMiddleware({ app })



const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor live in port ${server.graphqlPath}`);
})