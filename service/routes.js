module.exports = function(router) {

	var recipeRepository = require('./recipeRepository')();
	var recipesController = require("./recipesController")(recipeRepository);

	router.get('/recipes', recipesController.getRecipes);
	router.get('/recipes/:id', recipesController.getRecipe);
	router.post('/recipes', recipesController.addRecipe);
};
