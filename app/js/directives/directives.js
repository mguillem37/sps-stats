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

statsDirectiveModule.directive('butterbar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                element.addClass('hide');
                $rootScope.$on('$routeChangeStart', function() {
                    console.log("routeChangeStart");
                    element.removeClass('hide');
                });
                $rootScope.$on('$routeChangeSuccess', function() {
                    console.log("routeChangeSuccess");
                    element.addClass('hide');
                });
            }
        };
    }]);
