const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// API route example
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'Server is running',
    message: 'Welcome to Kevin Lyons\' personal website API'
  });
});

// Catch all handler: send back React's index.html file in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

