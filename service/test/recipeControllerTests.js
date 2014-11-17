var sinon = require('sinon'),
	mockRepository = {
		saveRecipe: sinon.spy()
	},
	recipeController = require('../recipesController')(mockRepository);

describe('recipe controller', function () {
	it('should insert new recipe', function () {
		recipeController.addRecipe({id: '123'}, {send: sinon.spy()});
		sinon.assert.called(mockRepository.saveRecipe);
	});
});
