import express, { urlencoded } from 'express';
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send('launched');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  // Extract form data
  const formData = req.body;
  res.redirect('https://facebook.com');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
