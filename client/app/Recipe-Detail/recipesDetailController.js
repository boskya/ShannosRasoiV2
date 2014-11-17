angular.module('ShannosRasoi').controller('recipesDetailController', ['$scope', '$routeParams', 'recipesService', function($scope, $routeParams, recipesService) {

	$scope.id = $routeParams.id;

}]);