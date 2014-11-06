describe("Recipes Services", function() {
	var recipesService;

	beforeEach(function() {
		module("ShannosRasoi");
		inject(function(_recipesService_) {
			recipesService = _recipesService_;
		});
	});

	it ("should return list of services", function() {
		var recipes = recipesService.getRecipes();
		expect(recipes).to.be.ok;
	});
});