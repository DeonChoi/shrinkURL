const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const urlsRouter = require('./routes/urls');
const redirectRouter = require('./routes/index');

app.use('/urls', urlsRouter);
app.use('/', redirectRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});