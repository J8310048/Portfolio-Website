require("dotenv").config();
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_BIZ,
        pass: process.env.EMAIL_APP_PASS,
    },
})

function sendContactEmail(customerName, email, comment) {
    const sendEmail = {
        from: process.env.EMAIL_BIZ,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Message from ${customerName}`,
        text: `Name: ${customerName}\nEmail: ${email}\nMessage: ${comment}`
    };

    return transporter.sendMail(sendEmail) //Nodemailer method that sends the email object
}

module.exports = sendContactEmail;