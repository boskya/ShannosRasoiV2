describe("Recipes Services", function() {
	var recipesService;
	var httpBackend;
	var recipes = [
		{
			"name" : "Some test recipe eeee",
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		}
	];

	beforeEach(function() {
		module("ShannosRasoi");
		inject(function(_recipesService_, $httpBackend) {
			recipesService = _recipesService_;
			httpBackend = $httpBackend;
			httpBackend.when("GET", "http://localhost:3001/recipe-api/recipes?action=get").respond(recipes);
		});
	});

	it ("should return list of recipes", function(done) {
		recipesService.getRecipes().then(function(recipes) {
			expect(recipes).to.be.ok;
			expect(recipes).to.have.length(1);
			expect(recipes[0]).to.have.property("name","Some test recipe eeee");
			done();
		});
		httpBackend.flush();
	});
});