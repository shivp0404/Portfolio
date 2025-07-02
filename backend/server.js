const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const app = express();
const fs = require("fs");
const path = require("path");
dotenv.config();

const projectsFilePath = path.join(__dirname, "projects.json");
app.use(express.static(path.join(__dirname, 'client')));
// Middleware
app.use(express.json());
app.use(cors());
const projects =[]

const readProjects = () => {
  try {
    const data = fs.readFileSync(projectsFilePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write Projects to the JSON File
const writeProjects = (projects) => {
  try {
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

const ADMIN_SECRET = process.env.ADMIN_SECRET;

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Use the generated app password
  },
  tls: {
    rejectUnauthorized: false, // Disable unauthorized certificate check
  },
});

// Contact form submission endpoint
app.post('/contact/submit', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate request data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Configure email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your Gmail address
    to: email, // Recipient's email address
    subject: `New Message from ${name}`,
    text: `You have received a new message from your contact form:

Name: ${name}
Email: ${email}
Message: ${message}`,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
  }
});

app.get('/getprojects',(req,res)=>{
  const projects = readProjects();
  res.json(projects);
})

app.post('/add-project', (req, res) => {
  const { title, description,github,live, secret } = req.body;

  // Verify the secret
  if (secret !== ADMIN_SECRET) {
    return res.status(403).json({ message: 'Forbidden: Invalid Admin Secret' });
  }

  // If secret is correct, add project
  const newProject = { title, description,github,live };
  const projects = readProjects();
  projects.push(newProject);
  writeProjects(projects);
 console.log(projects)
  res.status(200).json({ message: 'Project added successfully!', project: newProject });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
