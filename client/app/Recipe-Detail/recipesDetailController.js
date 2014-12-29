angular.module('ShannosRasoi').controller('recipesDetailController', ['$scope', '$stateParams', 'recipesService', function($scope, $stateParams, recipesService) {
	'use strict';

	recipesService.getRecipe($stateParams.id).then(function(recipe){
 		$scope.recipe = recipe || {};
	});
}]);
