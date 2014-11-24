angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {

	console.log('created main controller');
 	recipesService.getRecipes().then(function(recipes){
 		$scope.recipes = recipes;
	});

	$scope.seedRecipes = function(){
		var recipe = {
			"id:": Math.random() * 1000,
			"name" : "Some test recipe " + (new Date()).toString(),
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		};
		$scope.recipes.push(recipe);
		recipesService.addRecipe(recipe);
	};		

}]);