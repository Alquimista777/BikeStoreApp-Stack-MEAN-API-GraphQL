'use stric'

const { MongoClient } = require('mongodb')

class Conexion {
    db
    constructor(){
        this.mongoConnection()
    }

    mongoConnection() {
        MongoClient.connect(process.env.CONNECTION_DB, 
            {   
                useNewUrlParser: true, 
                useUnifiedTopology: true  
            }
        ).then(client => { 
            this.db = client.db('code-rockDB'), 
            console.log('Data base live') 
        }).catch(err => console.log(`Error data base`, err))
    }
}

module.exports = new Conexion()