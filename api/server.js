require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./config/db');

app.use(express.static(path.join(__dirname, "../app/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../app', 'build', 'index.html'));
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})