var sinon = require('sinon'),
	expect = require('chai').expect;

describe('recipe controller', function () {
	beforeEach(function () {
		this.mockRepository = {
			get: sinon.stub(),
			saveRecipe: sinon.spy()
		};
		this.recipeController = require('../recipesController')(this.mockRepository);
	});

	it('should insert new recipe', function () {
		this.recipeController.addRecipe({id: '123'}, {send: sinon.spy()});
		sinon.assert.called(this.mockRepository.saveRecipe);
	});

	it('should get recipe', function (done) {
		var expectedContent = {content: 'a good recipe'},
			response = {
				send: function (res) {
					expect(res).to.equal(expectedContent);
					done();
				}
			};

		this.mockRepository.get.returns({
			then: function (then) {
				then(expectedContent);
			}
		});

		this.recipeController.getRecipe({params: {id: '123'}}, response);
	});
});
