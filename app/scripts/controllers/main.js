'use strict';

/**
 * @ngdoc function
 * @name contactMgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactMgmtApp
 */
angular.module('contactMgmtApp')
  .controller('MainCtrl', function () {
    window.dispatchEvent(new Event('resize'));
  });
