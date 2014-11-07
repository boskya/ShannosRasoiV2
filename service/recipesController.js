module.exports = function() {
	var recipes = [
		{
			"name" : "Some recipe eeee",
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		}
		];

	var getRecipes = function(req, res, next) {
	
		res.send(recipes);
	};

	var addRecipe = function(req, res, next) {
		var recipe = req.params;
		recipes.push(recipe);
		res.send(201, recipe)
	};

	return {
		getRecipes : getRecipes,
		addRecipe: addRecipe
	};
};