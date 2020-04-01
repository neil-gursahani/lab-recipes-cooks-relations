# LAB | Recipes with Cooks

This lab builds on top of the Recipes CRUD exercise. We are going to extend it with cooks and going to make them relate to recipes. We are going to start out with new data. First, make a new database with 2 collections: cooks and recipes. Second, populate the collections using Compass (not mongoimport) and the json files in the data directory. Notice that the creator field in the recipe documents now have an ObjectId as a value. These ObjectIds refer to the OjectIds of the cooks.

## Iteration 1 - Populating recipes with cooks

Modify the Recipe Model in such a way it can handle relations. Update your recipes list route in such a way that all the recipes include the name and picture of the cook. Hint: you have to use `Cook.populate` in your recipes route.

## Iteration 2 - Adding CRUD routes for cooks

Create all the CRUD routes for cooks. Make it possible to add cooks. You don't have to upload the picture of an cook. As an image you can enter a link of a picture somewhere online.

## Iteration 3 - Creating a new recipe and setting the relationship to a cook

Part of creating a recipe should be assigning it to a cook. You do this by setting the creator field to the ObjectId of the cook that belongs to it. First, adjust your `recipes/create/` GET route. It should first query the db for all the cooks. You pass these cooks as data to the `render` method. Second, in the corresponding hbs file you have to loop over all the cooks and create options fields for them, like this:

```
    ... rest of form like you had previously
    <select class="form-control" name="cooks" type="text" multiple="{{cooks.length}}">
        {{#each cooks}}
            <option value="{{this.id}}">{{this.name}}</option>
        {{/each}}
    </select>

```