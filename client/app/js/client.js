
// Declare app level module which depends on views, and components
angular.module('ShannosRasoi', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider
  	.when('/recipes',{templateUrl:'../Recipes/recipes.html', controller: 'RecipesController'})
  	.when("/recipes/:id", {templateUrl: "../Recipe-Detail/recipe-detail.html", controller: "recipesDetailController"})
	.otherwise({redirectTo: '/recipes'});
}]);

angular.module('ShannosRasoi').controller('recipesDetailController', ['$scope', '$routeParams', 'recipesService', function($scope, $routeParams, recipesService) {

	$scope.id = $routeParams.id;

}]);
angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {

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

	var addRecipe = function(recipe) {
		var request = $http.post(url + "recipes", recipe);
		return request.then(handleSuccess, handleError);
	};

	function handleSuccess(response) {
		return response.data;
	};

	function handleError() {

	};

	return  {
	 	getRecipes:  getRecipes,
	 	addRecipe: addRecipe
	};

}]);