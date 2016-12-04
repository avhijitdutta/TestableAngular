'use strict';

describe('Controller: CreatecontactCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var CreatecontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecontactCtrl = $controller('CreatecontactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    
  });
});
