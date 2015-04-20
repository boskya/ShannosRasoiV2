// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var recipeSchema = new Schema({
  name: String,
  description: String,
  ingredients: {
    name: String,
    quantity:Number
  }
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
