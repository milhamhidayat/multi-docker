const keys = require('./keys')

// express app setup
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// Postgres client setup
const { Pool } = require('pg')
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
    max: 10,
    idleTimeoutMillis: 15000,
    connectionTimeoutMillis: 2000,
})
pgClient.on('error', () => console.log('Lost PG Connnection'))

pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch(err => console.log(err))