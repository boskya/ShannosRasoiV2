module.exports = function() {
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