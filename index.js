const express = require('express');
const app = express();
const port = 3000;

// Import user routes
const userRoutes = require('./routes/users');

// Middleware
app.use(express.json());

// Mount the user routes
app.use('/users', userRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});