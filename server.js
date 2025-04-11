const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;
require('dotenv').config()
const mysql = require('mysql2')


app.use(cors())


const pool = mysql.createPool(
    {
        host: process.env.DB_host,
        user: process.env.DB_user,
        password: process.env.DB_pass,
        database: process.env.DB_name,
        port: process.env.DB_port,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
    }
)



const connection = mysql.createConnection(
    {
        host: process.env.DB_host,
        user: process.env.DB_user,
        password: process.env.DB_pass,
        database: process.env.DB_name,
        port: process.env.DB_port
    }
)

connection.query(
    'SELECT * FROM users',
    function (err, results, fields) {
        if (results) {
            console.log(results);
            console.log(fields);
        } else console.log(err)

    }
)



app.get('/', (req, res) => {
    res.send(`$500 dollars and $500 cents. And I got $500 sentences for you too bitch`)
})

app.get('/status', (req, res) => {
    res.send("Hellow")
})



app.listen(port, console.log("Hello! Your app is running now!"));

