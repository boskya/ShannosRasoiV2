var nano = require('nano')('http://localhost:5984');
var db = nano.use('shannos-rasoi');

var saveRecipe = function (recipe) {
	db.insert(recipe);
};

module.exports = {
	saveRecipe: saveRecipe
};
