
// the app/scripts/main.js file, which defines our RequireJS config
// require.config({
	// paths: {
		// angular: '../lib/angular/angular.min',
		// jquery: 'jquery/jquery',
		// domReady: 'require/domReady',
		// twitter: 'bootstrap/bootstrap',
		// angularResource: 'angular/angular-resource.min',
	// },
	// shim: {
		// 'twitter/js/bootstrap': {
		// deps: ['jquery/jquery']
	// },
	// angular: {
		// deps: [ 'jquery/jquery',
		// 'twitter/js/bootstrap'],
		//Exporte la variable globale 'angular' en tant que module 
		// exports: 'angular'
	// },
	// angularResource: { deps:['angular'] }
	// }
// });

//require([
	// point d'entrée de l'application app.js et de ses dépendances
	//'app',
	// Note this is not Twitter Bootstrap
	// but our AngularJS bootstrap
	// 'bootstrap',
	// '../js/controllers/controllers',
	// 'services/services',
	// 'directives/docus',
	// 'filters/filters'
	// Any individual controller, service, directive or filter file
	// that you add will need to be pulled in here.
	// This will have to be maintained by hand.
	// ],
	// function (angular, app) {
		// 'use strict';
		// app.config(['$routeProvider',
			// function($routeProvider) {
			    // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
				// $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
				// $routeProvider.otherwise({redirectTo: '/view1'});
			// }
		// ]);
	// }
// );