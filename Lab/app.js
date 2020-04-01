const express = require('express');
const app = express();

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/food', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((connectionInfo) => {
        console.log("SUCCESS - Connected to the database!");
    })
    .catch((error) => {
        console.log("ERROR - Did not connect to the database!", error);
    });

app.use('/', require('./routes/index'));
app.use('/', require('./routes/recipe'));
app.use('/', require('./routes/cook'));
 
app.listen(3000, () => {
    console.log("SUCCESS - Connected to the server!", 3000);
});