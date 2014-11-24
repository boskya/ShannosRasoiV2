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
	db.list({include_docs: true}, function (err, body) {
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

module.exports = {
	get: getRecipe,
	getRecipes: getRecipes,
	saveRecipe: saveRecipe
};
