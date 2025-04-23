require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require("nodemailer");
exports.app = app;
const { error } = require('console');
const sendContactEmail = require("./public/mail.js");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The server is awaiting your response")
})

app.post("/contact", async (req, res) => {

    const { fullName, email, message } = req.body

    try {
        await sendContactEmail(fullName, email, message);
        res.status(200).json({ comment: "message successful!!!!!!!!!!!!!" })
    } catch (error) {
        console.error("Error sending message: ", error)
        res.status(500).json({ error: "YOU FAILED TO SEND YOUR MESSAGE! WHAT IS WRONG WITH YOU?!?!" })
    }



})

app.listen(3000, (err) => {
    if (err) {
        throw err
    } else console.log("Hello! Your app is running now! " + 3000)
});
