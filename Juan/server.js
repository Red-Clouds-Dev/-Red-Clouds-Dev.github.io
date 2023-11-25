const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require('dotenv').config();
const cors = require('cors'); 
require('dotenv').config();
const multer = require('multer');
const upload = multer();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

app.post('/send-email', upload.none(),(req, res) => {
    const { name, email, subject, message } = req.body;
    const data = {
        from: 'Mailgun Sandbox <postmaster@sandboxa1ce9dfc9b5e4fbc8f8a8ba6b1fab01e.mailgun.org>', 
        to: process.env.EMAIL_USER, 
        subject: `New Portfolio Contact from: ${name} - ${subject}`,
        text: `You have a new submission from: ${name} (${email}).\n\nMessage:\n${message}`
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send('Email sent successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});