angular.module("ShannosRasoi").service('recipesService', function() {
		var recipes = [
		{
			"name" : "Some recipe",
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		}
	];



	var getRecipes = function() {
		return recipes;
	};

	return  {
	 	getRecipes:  getRecipes
	};
});