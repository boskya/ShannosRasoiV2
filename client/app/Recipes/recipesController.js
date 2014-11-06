angular.module('ShannosRasoi').controller('RecipesController', ['$scope', 'recipesService', function($scope, recipesService) {

	$scope.recipes = recipesService.getRecipes();	

}]);