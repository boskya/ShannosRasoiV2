angular.module('ShannosRasoi').controller('recipesDetailController', ['$scope', '$stateParams', 'recipesService', function($scope, $stateParams, recipesService) {
	$scope.id = $stateParams.id;
	recipesService.getRecipe($scope.id).then(function(recipe){
 		$scope.recipe = recipe || {};
	});

}]);