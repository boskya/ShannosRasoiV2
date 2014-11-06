module.exports = function() {

	var getRecipes = function(req, res, next) {
	  res.send("Made it");
	};

	return {
		getRecipes : getRecipes
	};
};