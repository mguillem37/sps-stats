'use strict';

var domainesCache = null;

//Declare app level module which depends on filters, and services
var statsModule = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

function routeConfigurator($routeProvider) {
    $routeProvider.
		when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'}).
		when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
		when('/view3', {templateUrl: 'partials/partial3.html', controller: 'StatsCtrl',
            //Chargement des données avant l'affichage de la vue
            resolve: {
                lesdomainesexistants: function(Stats) {
                    if (domainesCache == null) {
                        console.log("chargement des domaines");
                        domainesCache = Stats.queryDomaines();
                    } else {
                        console.log("utilisation du cache");
                    }
                    return domainesCache;
                }
            }}).
		otherwise({redirectTo: '/view1'});
};

statsModule.config(routeConfigurator);
  
