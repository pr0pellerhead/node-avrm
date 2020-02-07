const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers');

var app = express(); // kreiraj express aplikacija
app.use(bodyParser.urlencoded({ extended: false })); // reading body data from post request

app.get('/', handlers.index);
app.get('/ime', handlers.ime);
app.get('/greetings/:ime', handlers.greetings);
app.get('/calc/:op/:a/:b', handlers.calc1);
app.post('/calc', handlers.calc2);
app.post('/values', handlers.values);

app.listen(8080);