
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
