'use strict';

/* Controllers */
var statsControllerModule = angular.module('myApp.controllers', []);

statsControllerModule.controller('MyCtrl1', [function() {
}]);


statsControllerModule.controller('MyCtrl2', [function() {
}]);

statsControllerModule.controller('StatsCtrl', ['$scope', 'lesdomainesexistants', 'author', function($scope, lesdomainesexistants, author) {
		$scope.domaines = lesdomainesexistants;
        $scope.artist = author;
	}
 ]);
