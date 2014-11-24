module.exports = function(recipeRepository) {
	var recipes = [
		{
			"id" : "1234",
			"name" : "Some recipe eeee",
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		}
		];

	var getRecipe = function(req, res, next) {
		recipeRepository
			.get(req.params.id)
			.then(function (recipe) {
				res.send(recipe);
			});
	};

	var getRecipes = function(req, res, next) {
		res.send(recipes);
	};

	var addRecipe = function(req, res, next) {
		var recipe = req.params;
		recipes.push(recipe);

		recipeRepository.saveRecipe(recipe);
		res.send(201, recipe);
	};

	return {
		getRecipe: getRecipe,
		getRecipes : getRecipes,
		addRecipe: addRecipe
	};
};
