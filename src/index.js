'use strict';

import * as config from '../config.json';
import express from 'express';
const app = express();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(config.port);
