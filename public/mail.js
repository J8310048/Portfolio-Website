require("dotenv").config();
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_BIZ,
        pass: process.env.EMAIL_APP_PASS,
    },
})

function sendContactEmail(fullName, email, message) {
    const sendEmail = {
        from: process.env.EMAIL_BIZ,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Message from ${fullName}`,
        text: `Customer Name: ${fullName}\nEmail: ${email}\nComment: ${message}`
    };

    return transporter.sendMail(sendEmail) //Nodemailer method that sends the email object
}

module.exports = sendContactEmail;