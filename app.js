var express = require('express');
var app = express();
var db = require('./db/db');
var cors = require('cors');

app.use(cors());

var GameController = require('./controllers/game.controller');
app.use('/games', GameController);

module.exports = app;
