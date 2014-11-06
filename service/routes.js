module.exports = function(server) {
	var recipesController = require("./recipesController.js")();
	server.get('/recipe-api/recipes', recipesController.getRecipes);	
};