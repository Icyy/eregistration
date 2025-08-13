require('dotenv').config(); // Load env vars

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Email route
app.post('/submit-form', upload.fields([
  { name: 'aadharCard', maxCount: 1 },
  { name: 'panCard', maxCount: 1 }
]), async (req, res) => {
  const { fullName, email, phone } = req.body;
  const aadharFile = req.files.aadharCard[0];
  const panFile = req.files.panCard[0];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New Agreement Submission',
    html: `
      <h3>New Agreement Submission</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `,
    attachments: [
      { filename: aadharFile.originalname, path: aadharFile.path },
      { filename: panFile.originalname, path: panFile.path }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
