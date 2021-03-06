const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
