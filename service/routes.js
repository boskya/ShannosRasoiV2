module.exports = function(server) {
	var recipesController = require("./recipesController.js")(require('./recipeRepository'));
	server.get('/recipe-api/recipes', recipesController.getRecipes);
	server.post('/recipe-api/recipes', recipesController.addRecipe);
};
