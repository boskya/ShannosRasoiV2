angular.module('ShannosRasoi').controller('recipesDetailController', ['$scope', '$stateParams', 'recipesService', function($scope, $stateParams, recipesService) {
	console.log('created');
	$scope.id = $stateParams.id;

}]);