const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const empRouter = require('./controller/empController');

app.use(cors({ origin: 'http://localhost:4200' }))
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('connected at 3000');
});

app.use('/employees', empRouter);