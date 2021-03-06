require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.DB_CONNECTION;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const urlsRouter = require('./routes/urls');
const redirectRouter = require('./routes/index');
const authRoute = require('./routes/auth');





app.use('/api/urls', urlsRouter);
app.use('/api/user', authRoute);
app.use('/api', redirectRouter);

app.use(express.static(path.join(__dirname, 'build')));
    
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'build')));
    
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//     });
// }

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});