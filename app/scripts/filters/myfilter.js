'use strict';

/**
 * @ngdoc filter
 * @name contactMgmtApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the contactMgmtApp.
 */
angular.module('contactMgmtApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
