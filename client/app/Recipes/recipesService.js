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