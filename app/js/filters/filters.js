'use strict';

/* Filters */

var statsFilterModule = angular.module('myApp.filters', []);

statsFilterModule.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
 }]);
 
 statsFilterModule.filter('copyright', ['author', function(author) {
    return function(text) {
      return "@" + String(text);
    }
 }]);
  
  
