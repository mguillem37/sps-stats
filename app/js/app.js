'use strict';

var domainesCache = null;

//Declare app level module which depends on filters, and services
var statsModule = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

statsModule.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.
        when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'}).
        when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
        when('/view3', {templateUrl: 'partials/partial3.html', controller: 'StatsCtrl',
            //Chargement des données avant l'affichage de la vue
            resolve: {
                lesdomainesexistants: ['Stats', function(Stats) {
                    if (domainesCache == null) {
                        console.log("chargement des domaines");
                        domainesCache = Stats.queryDomaines();
                    } else {
                        console.log("utilisation du cache");
                    }
                    return domainesCache;
                }]
            }}).
        otherwise({redirectTo: '/view1'});

    $httpProvider.responseInterceptors.push('LoggerResponseInterceptor');
    //version actuelle 1.0.7
    //$httpProvider.interceptors.push('LoggerInterceptor');

    // A définir avant son utilisation
    var testFunction = function (data, headers) {
        var msg = data || "N/A";
        console.log("INFO testFunction data : " + msg.toString());
        return data;
    };

    $httpProvider.defaults.transformRequest.push(testFunction);

}]);


