const express = require('express');
const app = express();
const path = require('path');
const UserManager = require('./controllers/UserManager');

const userManager = new UserManager();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  try {
    userManager.register(username, password);
    res.status(201).json({ message: 'Successful registration' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const success = userManager.login(username, password);
  if (success) {
    res.json({ message: 'Successful login' });
  } else {
    res.status(401).json({ message: 'Incorrect login details' });
  }
});

// Change password
app.post('/change-password', (req, res) => {
  const { username, newPassword } = req.body;
  const success = userManager.changePassword(username, newPassword);
  if (success) {
    res.json({ message: 'Password changed' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));