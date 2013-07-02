'use strict';

//Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
  
 // define(['angular', 'angularResource', 'controllers/controllers', 'services/services', 'filters/filters', 'directives/directives'], function (angular) {
	//définition du module principal Angular at de ses dépendances
	// return angular.module(‘myApp’, ['ngResource', 'controllers', 'services', 'filters', 'directives']);
// });
