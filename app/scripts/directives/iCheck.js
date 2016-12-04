'use strict';

/**
 * @ngdoc directive
 * @name contactMgmtApp.directive:icheckBox
 * @description
 * # icheckBox
 */
angular.module('contactMgmtApp')
  .directive('icheckBox', function ($parse) {
  	var directive={};
  	directive.restrict='A';
    directive.require='?ngModel';
  	directive.link=function(scope, element, attrs){

  		angular.element(element).iCheck({
	      checkboxClass: 'icheckbox_square-blue',
	      radioClass: 'iradio_square-blue',
	      increaseArea: '20%' // optional
	    });

      var ngModelGet = $parse(attrs.ngModel);

      scope.$watch(attrs.ngModel, function () {
        console.log('Changed to' + ngModelGet(scope));
      });
  	};

  	return directive;
  });
