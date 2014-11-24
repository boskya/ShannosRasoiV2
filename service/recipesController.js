module.exports = function(recipeRepository) {
	var recipes = [
		{
			"id" : "1234",
			"name" : "Some recipe eeee",
			"description" : "Some description",
			"ingredients" : [
				{
					"name": "white or yellow onion",
					"quantity": "1",
					"measure": "medium"
				},
				{
					"name": "butter",
					"quantity" : 6,
					"measure": "tablespoons"
				},
				{
					"name:": "diced tomatoes",
					"quantity": "2",
					"measure": "14.5 ounce can"
				}
			],
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
		recipeRepository
			.getRecipes()
			.then(function (recipes) {
				res.send(recipes);
			});
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
