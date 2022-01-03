const express = require('express');

require('dotenv').config();
const routes = require('./admin/api');
const db = require('./db');

const app = express();

const port = 5000;

app.use('/admin/api', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
