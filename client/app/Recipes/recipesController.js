angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {
	'use strict';

	$scope.recipes = [];

 	recipesService.getRecipes().then(function(recipes){
 		$scope.recipes = recipes || [];
	});

	$scope.seedRecipes = function(){
		var recipe = {
			"name" : "Some test recipe " + (new Date()).toString(),
			"description" : "Some description",
			"ingredients" : [
				{ "amount": 1,
				  "name": "apple"
				 },
				 { "amount": 1,
				   "name": "potato",
				   "measure": "cup",
				 },
				 {
				 	"amount": 1,
				 	"name": "onion",
				 	"measure": "cup",
				 	"prep": "finely chopped"
				 }
				],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		};
		
		recipesService.addRecipe(recipe).then(function(addedRecipe) {
			$scope.recipes.push(addedRecipe);
		})
	};

}]);
