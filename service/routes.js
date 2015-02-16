module.exports = function(server, store) {

	var recipeRepository = require('./recipeRepository')(store);
	var recipesController = require("./recipesController")(recipeRepository);

	server.get('/recipe-api/recipes', recipesController.getRecipes);
	server.get('/recipe-api/recipes/:id', recipesController.getRecipe);
	server.post('/recipe-api/recipes', recipesController.addRecipe);
};
