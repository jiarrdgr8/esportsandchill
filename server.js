const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb')


let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(process.env.db_url)
            .then((client)=>{
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    }
    getDb: () => dbConnection
}

app.listen(5000, () => console.log('Server Started....'))