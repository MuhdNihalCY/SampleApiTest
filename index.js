const express = require('express');
const app = express();
const port = 3000;

// API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
