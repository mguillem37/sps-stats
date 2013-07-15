'use strict';

/* Directives */

var statsDirectiveModule = angular.module('myApp.directives', []);

statsDirectiveModule.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
}]);

statsDirectiveModule.directive('appAuthor', ['author', function(author) {
    return function(scope, elm, attrs) {
      elm.text("@" + author);
    };
}]);

statsDirectiveModule.directive('butterbar', ['$rootScope', '$log',
    function($rootScope, $log) {
        return {
            link: function(scope, element, attrs) {
                element.addClass('hide');
                $rootScope.$on('$routeChangeStart', function() {
                    $log.info("routeChangeStart");
                    element.removeClass('hide');
                });
                $rootScope.$on('$routeChangeSuccess', function() {
                    $log.info("routeChangeSuccess");
                    element.addClass('hide');
                });
            }
        };
    }]);
