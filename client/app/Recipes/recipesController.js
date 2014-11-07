angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {

 	recipesService.getRecipes().then(function(recipes){
 		$scope.recipes = recipes;
	});

	$scope.seedRecipes = function(){
		var recipe = {
			"name" : "Some test recipe " + (new Date()).toString(),
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		};
		$scope.recipes.push(recipe);
	};		

}]);