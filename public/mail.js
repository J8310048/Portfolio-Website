require("dotenv").config();
const nodemailer = require("nodemailer")

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_user,
//         pass: process.env.EMAIL_pass,
//     },
// })

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        clientId: process.env.CLIENT_id,
        clientSecret: process.env.CLIENT_secret,
        user: process.env.EMAIL_user,
    },
})

function sendContactEmail(customerName, email, comment) {
    const sendEmail = {
        from: email,
        to: process.env.EMAIL_user,
        subject: `Message from ${customerName}`,
        text: `Name: ${customerName}\nEmail: ${email}\nMessage: ${comment}`
    };

    return transporter.sendMail(sendEmail) //Nodemailer method that sends the email object
}

module.exports = sendContactEmail;