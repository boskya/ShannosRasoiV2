angular.module('ShannosRasoi').service('recipesService', ['$http', function($http) {
	'use strict';

	//TODO: Configure api route.
	var url = '/recipe-api/';

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
		return $http
			.post(url + 'recipes', recipe)
			.then(handleSuccess, handleError);
	};

	var getRecipe = function(id) {
		var request = $http({
				method: 'get',
				url: url + 'recipes/' + id,
				params: {
					action: 'get'
				}
		});
		return request.then(handleSuccess, handleError);
	};

	function handleSuccess(response) {
		return response.data;
	}

	function handleError() {

	}

	return  {
	 	getRecipes:  getRecipes,
	 	addRecipe: addRecipe,
	 	getRecipe: getRecipe
	};

}]);
