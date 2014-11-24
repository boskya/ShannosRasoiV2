module.exports = function(server) {
	var nano = require('nano')('http://localhost:5984'),
		store = nano.use('shannos-rasoi'),
		recipeRepository = require('./recipeRepository')(store),
		recipesController = require("./recipesController.js")(recipeRepository);

	server.get('/recipe-api/recipes', recipesController.getRecipes);
	server.get('/recipe-api/recipes/:id', recipesController.getRecipe);
	server.post('/recipe-api/recipes', recipesController.addRecipe);
};
