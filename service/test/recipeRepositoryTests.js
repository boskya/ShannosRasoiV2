var sinon = require('sinon'),
	expect = require('chai').expect;

describe('recipe repository', function () {
	beforeEach(function () {
		this.mockStore = {
			list: function (params, callback) {
				callback(undefined, {
					rows: [{
						doc: 'a good recipe'
					}, {
						doc: 'a knockout recipe'
					}]
				});
			},
			get: sinon.stub(),
			insert: sinon.stub()
		};
		this.recipeRepository = require('../recipeRepository')(this.mockStore);
	});

	it('should list all recipes', function (done) {
		this.recipeRepository.getRecipes()
			.then(function (somerecipes) {
				expect(somerecipes).to.be.ok();
				expect(somerecipes).to.have.members(['a good recipe', 'a knockout recipe']);
				done();
			});
	});
});
