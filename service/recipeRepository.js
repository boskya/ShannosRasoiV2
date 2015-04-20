var	q = require('q');
var Recipe = require('./model/recipe');

module.exports = function () {
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
		var newRecipe = Recipe({
  		name: recipe.name,
			description: recipe.description,
			ingredients: recipe.ingredients
		});

		newRecipe.save(function(err){
			if (err) {
				deferred.reject();
			}
			else {
				recipe.id = newRecipe.id;
				deferred.resolve(recipe);
			}
		});
		return deferred.promise;
	};

	var getRecipe = function (id) {
		var deferred = q.defer();
		Recipe.findById(id, function(err, recipe) {
			if (err) {
				deferred.reject(err);
			}
			else {
				deferred.resolve(recipe);
			}
		});
		return deferred.promise;
	};

	var getRecipes = function () {
		var deferred = q.defer();
		console.log('get');
		Recipe.find({}, function (err, recipes) {
			if (err) {
				deferred.reject(err);
			}
			else {
				deferred.resolve(recipes);
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
