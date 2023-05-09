const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
  if (error) return console.log(error);
  db = client.db('login');
  app.locals.db = db;
  app.listen(process.env.PORT, function() {
    console.log('listening on 8080');
  });
});

app.use('/naverLogin', require('./routes/oauth/naverLogin'));