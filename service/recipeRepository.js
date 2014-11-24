var	q = require('q');

module.exports = function (store) {
	var saveRecipe = function (recipe) {
		store.insert(recipe);
	};

	var getRecipe = function (id) {
		var deferred = q.defer();
		store.get(id, function (err, body) {
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
		store.list({include_docs: true}, function (err, body) {
			var docs = null;

			if (err) {
				deferred.reject(err);
			}
			else {
				docs = body.rows.map(function (row) {
					return row.doc;
				});
				deferred.resolve(docs);
			}
		});
		return deferred.promise;
	};

	return {
		get: getRecipe,
		getRecipes: getRecipes,
		saveRecipe: saveRecipe
	};
};
