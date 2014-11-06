
// Declare app level module which depends on views, and components
angular.module('ShannosRasoi', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider.when('/recipes',{templateUrl:'../Recipes/recipes.html', controller: 'RecipesController'});
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);
