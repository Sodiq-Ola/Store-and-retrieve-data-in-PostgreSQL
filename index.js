const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});