var	nano = require('nano')('http://localhost:5984'),
	db = nano.use('shannos-rasoi'),
	q = require('q');

var saveRecipe = function (recipe) {
	db.insert(recipe);
};

var getRecipe = function (id) {
	var deferred = q.defer();
	db.get(id, function (err, body) {
		if (err) {
			deferred.reject(err);
		}
		else {
			deferred.resolve(body);
		}
	});
	return deferred.promise;
};

var getRecipes = function () {
	var deferred = q.defer();
	db.list(function (err, body) {
		if (err) {
			deferred.reject(err);
		}
		else {
			deferred.resolve(body);
		}
	});
	return deferred.promise;
};

module.exports = {
	get: getRecipe,
	getRecipes: getRecipes,
	saveRecipe: saveRecipe
};
