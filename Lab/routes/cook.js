const express = require('express');
const app = express();
const cookModel = require('../models/Cook');

//READ
app.get('/cooks', (request, response) => {
    cookModel
        .find()
        .then((cookInfo) => {
            response.render('cooks/list', {cookHbs: cookInfo});
        })
        .catch((error) => {
            response.send(error);
        });  
});

app.get('/cooks/detail/:cookId', (request, response) => {
    cookModel
        .findById(request.params.cookId)
        .then((cookInfo) => {
            response.render('cooks/detail', {cookHbs: cookInfo});
        })
        .catch((error) => {
            response.send(error);
        });
});

//DELETE
app.get('/cooks/delete/:cookId', (request, response) => {
    cookModel
        .findByIdAndDelete(request.params.cookId)
        .then((cookInfo) => {
            response.redirect('/cooks');
        })
        .catch((error) => {
            response.send(error);
        });
});

//CREATE
app.get('/cooks/create', (request, response) => {
   response.render('cooks/create');
});

app.post('/cooks/create', (request, response) => {
    cookModel
        .create({
            name: request.body.name, 
            image: request.body.image
        })
        .then((cookInfo) => {
            response.redirect('/cooks');
        })
        .catch((error) => {
            response.send(error);
        });
});

//UPDATE
app.get('/cooks/update/:cookId', (request, response) => {
    cookModel
        .findById(request.params.cookId)
        .then((cookInfo) => {
            response.render('cooks/update', {cookHbs: cookInfo});
        })
        .catch((error) => {
            response.send(error);
        });
});

app.post('/cooks/update/:cookId', (request, response) => {
    debugger
    console.log(request.body)
    cookModel
        .findByIdAndUpdate(request.params.cookId,{
            name: request.body.name,
            image: request.body.image
        })
        .then((cookInfo) => {
            response.redirect(`/cooks/detail/${cookInfo._id}`);
            // response.redirect(`/cooks/detail/${cookInfo._id}`);
        })
        .catch((error) => {
            response.send(error);
        });
});

module.exports = app;