
// Declare app level module which depends on views, and components
angular.module('ShannosRasoi', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider.when('/recipes',{templateUrl:'../Recipes/recipes.html', controller: 'RecipesController'});
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);

angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {

	$scope.recipes = recipesService.getRecipes();	

}]);
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