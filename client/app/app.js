
// Declare app level module which depends on views, and components
angular.module('ShannosRasoi', [
  'ui.router'
]).
config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('recipes', {
			url:"/recipes",
			templateUrl:"../Recipes/recipes.html",
			controller:'RecipesController'
		})
		.state('recipes-detail', {
			url: "/recipes/:id",
			templateUrl:"../Recipe-Detail/recipe-detail.html",
			controller: "recipesDetailController"
		});
		$urlRouterProvider.otherwise("/recipes");

});