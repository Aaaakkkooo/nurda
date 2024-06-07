const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abaiabynagi2005@gmail.com', // Your email address
            pass: 'Akotop1gg'   // Your email password or app-specific password
        }
    });

    const mailOptions = {
        from: email,
        to: 'recipient-email@gmail.com', // Your recipient email address
        subject: 'Обратная связь от ' + name,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

app.listen(port, () => {
    console.log(`Server is running on https://aaaakkkooo.github.io/ako/${port}`);
});
