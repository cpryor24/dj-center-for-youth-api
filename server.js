const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(bodyParser.json( {extended: true} ));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors());

const routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, () => {
  console.log('Listening on', port);
})
