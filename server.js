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



const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.EMAIL_host,
    port: process.env.EMAIL_port,
    secure: false,
    auth: {
        user: process.env.EMAIL_user,
        pass: process.env.EMAIL_pass,
    },
})


app.post("/contact", (req, res) => {

    const { customerName, email, comment } = req.body

    sendContactEmail(customerName, email, comment)
    res.status(200).send("message successful!!!!!!!!!!!!!")

})

app.listen(3000, (err) => {
    if (err) {
        throw err
    } else console.log("Hello! Your app is running now! " + 3000)
});
