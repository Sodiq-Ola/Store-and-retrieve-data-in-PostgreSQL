const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // Adjust if your folder is different

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});