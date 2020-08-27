const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(morgan(':method :url :status :response-time ms'));

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/query', (req, res) => {
    res.json({'message': 'Hello.'});
});

const port = process.env.PORT || 80;
app.listen(port);