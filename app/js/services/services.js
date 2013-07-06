'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//  value('version', '0.1');
  
var statsServiceModule = angular.module('myApp.services', []);

statsServiceModule.value('version', '0.1-RC1');
statsServiceModule.value('author', 'MG');

statsServiceModule.factory('Stats', [function() {

	var stats = {};

	stats.queryDomaines = function() {
		return [
			{nom: 'retraite'},
			{nom: 'banque'},
			{nom: 'support-confiancenum'}
		];
	};
	
	return stats;
}]);
