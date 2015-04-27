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
				res.send(recipes);
			});
	};

	var addRecipe = function(req, res, next) {
		var recipe = req.body;
		recipeRepository
			.saveRecipe(recipe)
			.then(function (recipe) {
				res.status(201).send(recipe);
			});
	};

	return {
		getRecipe: getRecipe,
		getRecipes : getRecipes,
		addRecipe: addRecipe
	};
};
