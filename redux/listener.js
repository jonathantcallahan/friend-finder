const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || process.argv[2] || 8080;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./html-route')(app);
require('./api-route')(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})