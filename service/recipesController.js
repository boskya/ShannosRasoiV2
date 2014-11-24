module.exports = function(recipeRepository) {
	var getRecipe = function(req, res, next) {
		recipeRepository
			.get(req.params.id)
			.then(function (recipe) {
				res.send(recipe);
			});
	};

	var getRecipes = function(req, res, next) {
		recipeRepository
			.getRecipes()
			.then(function (recipes) {
				res.send(recipes.rows);
			});
	};

	var addRecipe = function(req, res, next) {
		var recipe = req.params;
		recipeRepository.saveRecipe(recipe);
		res.send(201, recipe);
	};

	return {
		getRecipe: getRecipe,
		getRecipes : getRecipes,
		addRecipe: addRecipe
	};
};
