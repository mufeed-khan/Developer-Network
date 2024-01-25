const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
