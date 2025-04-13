require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
exports.app = app;
const { error } = require('console');
const nodemailer = require(nodemailer);

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", (req, res) => {


})




app.listen(3000, (err) => {
    if (err) {
        throw err
    } else console.log("Hello! Your app is running now! " + 3000)
});
