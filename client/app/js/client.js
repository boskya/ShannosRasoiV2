
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
angular.module("ShannosRasoi").service('recipesService', ['$http', function($http) {
	var url = "http://localhost:3001/recipe-api/";

	var getRecipes = function() {
		var request = $http({
				method: "get",
				url: url + "recipes",
				params: {
					action: "get"
				}
		});
		return request.then(handleSuccess, handleError);
	};

	function handleSuccess(response) {
		return response.data;
	};

	function handleError() {
		
	};

	return  {
	 	getRecipes:  getRecipes
	};
}]);