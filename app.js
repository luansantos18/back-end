//server.js
import express from 'express';
import indexRoute from './src/routes/index';
const bodyParser = require('body-parser');

const app = express();

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);


app.listen(3000);


module.exports = app;


