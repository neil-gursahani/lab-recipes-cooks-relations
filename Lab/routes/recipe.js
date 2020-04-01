const express = require('express');
const app = express();
const recipeModel = require('../models/Recipe');

app.get('/recipes', (request, response) => {
    recipeModel
        .find()
        // .populate('cooks')
        .then((recipeInfo) => {
            response.render('recipes/list', {recipeHbs: recipeInfo});
        })
        .catch((error) => {
            response.send(error);
        });
});

app.get('/recipes/detail/:recipeId', (request, response) => {
    recipeModel
        .findById(request.params.recipeId)
        .populate('cooks')
        .then((recipeInfo) => {
            response.render('recipes/detail', {recipeHbs: recipeInfo});
        })
        .catch((error) => {
            response.send(error);
        });
});

module.exports = app;