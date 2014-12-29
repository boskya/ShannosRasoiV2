var	q = require('q');

module.exports = function (store) {
	function mapRecipe(rawRecipe) {
		return {
			id: rawRecipe._id,
			name: rawRecipe.name,
			description: rawRecipe.description,
			ingredients: rawRecipe.ingredients,
			steps: rawRecipe.steps
		};
	}

	function mapRecipes(rawRecipes) {
		return rawRecipes.map(function (rawRecipe) {
			return mapRecipe(rawRecipe.doc);
		});
	}

	var saveRecipe = function (recipe) {
		var deferred = q.defer();
		store.insert(recipe, {include_docs: true}, function (err, body) {
			if (err) {
				deferred.reject();
			}
			else {
				recipe.id = body.id;
				deferred.resolve(recipe);
			}
		});
		return deferred.promise;
	};

	var getRecipe = function (id) {
		var deferred = q.defer();
		store.get(id, function (err, body) {
			if (err) {
				deferred.reject(err);
			}
			else {
				deferred.resolve(mapRecipe(body));
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
				deferred.resolve(mapRecipes(body.rows));
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
