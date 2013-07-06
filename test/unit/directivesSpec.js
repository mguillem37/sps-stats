'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });

    describe('app-author', function() {
        it('should print author', function() {
            module(function($provide) {
                $provide.value('author', 'MG');
            });
            inject(function($compile, $rootScope) {
                var element = $compile('<span app-author></span>')($rootScope);
                expect(element.text()).toEqual('@MG');
            });
        });
    });

});
