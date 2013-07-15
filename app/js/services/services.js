'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//  value('version', '0.1');
  
var statsServiceModule = angular.module('myApp.services', []);

statsServiceModule.value('version', '0.1-RC1');
statsServiceModule.value('author', 'MG');

// TODO la transformer en promise our qu'elle soit exécuté par resolve
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

/**
 * Attetion : cet interceptor se déclenche pour chaque appel au niveau de $http
 * y compris pour les changements de pages !!!
 */
statsServiceModule.factory('LoggerResponseInterceptor', ['$q', '$log', function($q, $log) {

    return function(promise) {
        return promise.then(function(response) {
            var msg = response || "N/A";
            $log.info("INFO LoggerResponseInterceptor SUCCESS " +  msg.toString());
            return response;
        }, function(response) {
            var msg = response || "N/A";
            $log.error("ERROR LoggerResponseInterceptor FAILURE " + msg.toString());
            return $q.reject(response);
        });
    }

}]);

// Le meme service mais sans promise (ecarté depuis la version 1.1.4+
statsServiceModule.factory('LoggerInterceptor', ['$q', '$log', function($q, $log) {

    return {

        response: function (response) {
            $log.info("INFO LoggerInterceptor SUCCESS " + response);
            return response;
        },
        responseError: function (response) {
            $log.error("ERROR LoggerInterceptor FAILURE " + response);
            return $q.reject(response);
        }
    };

}]);



