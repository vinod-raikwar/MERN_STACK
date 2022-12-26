const express = require('express');
// const router = require('router');
const router = new express.Router();
const nodemailer = require('nodemailer');

router.post('/register', (req, res) => {
    // console.log(req.body);
    const { email,password,tnc } = req.body;

    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_ID,
            to: email,password,tnc,
            subject: 'Sending Email With React and Nodejs',
            html: `<h1> Congratulation You Succesfully Send Email from ${email} and Pass: ${password} </h1>`
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error", error);
            } else {
                console.log("Email Sent " + info.response);
                res.status(201).json({ status: 201, info })
            }
        });
    } catch (err) {
        res.status(201).json({ status: 401, err })
    }

});

module.exports = router;