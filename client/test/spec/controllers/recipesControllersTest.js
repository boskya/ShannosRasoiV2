describe("recipes controller", function(){
	var scope;
	var recipes = [
		{
			"name" : "Some test recipe",
			"description" : "Some description",
			"ingredients" : ["apple", "potato", "onion"],
			"steps": [
				"This is step 1",
				"This is step 2"
			]
		}
	];
	var recipesService;

	beforeEach(function() {
		var mockRecipesService = {
			data : recipes
		};

	  	module('ShannosRasoi', function($provide) {
    		$provide.value('recipesService',mockRecipesService);
	  	});

	  	//mock of service
		inject(function($q) {
	   		mockRecipesService.getRecipes = function() {
	    		var defer = $q.defer();
		  		defer.resolve(this.data);
	     		return defer.promise;
	    	};
		});

		inject(function($controller, $rootScope, _recipesService_, $q) {
		  	scope = $rootScope.$new();
	  		recipesService = _recipesService_;
	  		$controller('RecipesController',
                {$scope: scope, recipesService: recipesService });
	  		scope.$digest();
	  		mockRecipesService.getRecipes = function() {
	    		var defer = $q.defer();
		  		defer.resolve(this.data);
	     		return defer.promise;
			};
		});

	});

	it ('shoud contain list of recipes', function(){
			expect(scope.recipes).to.be.ok;
			expect(scope.recipes).to.have.length(1);
			expect(scope.recipes[0]).to.have.property("name", "Some test recipe");
	});
});