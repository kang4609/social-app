const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./router/users');
const authRoute = require('./router/auth');

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  console.log('gooooo~~');
  res.send('welcome to homepage');
});

app.get('/users', (req, res) => {
  res.send('welcome to users');
});

app.listen(8800, () => {
  console.log('backend server is running!');
});
