'use strict';

// Declare app level module which depends on views, and components
angular.module('listApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])
  .controller('ListController', function() {
  })
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/main-header.html'
    };
  });
