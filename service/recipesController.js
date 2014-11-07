module.exports = function() {

	var getRecipes = function(req, res, next) {
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
		res.send(recipes);
	};

	return {
		getRecipes : getRecipes
	};
};