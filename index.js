const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send('launched')
})
;// Route to handle form submission
app.post('/submit', (req, res) => {
  // Extract form data
  const formData = req.body;

  // Write form data to a file
  // fs.writeFile('formData.json', JSON.stringify(formData), (err) => {
  //   if (err) {
  //     console.error('Error writing form data to file:', err);
  //     res.status(500).send('Internal Server Error');
  //     return;
  //   }
  // });
  res.redirect('https://facebook.com');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
