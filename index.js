 
const express = require('express');
const app = express();
let pot=3000


app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the School Management System' });
});

app.listen(pot, () => console.log(`Server running on port ${pot}`));