'use strict';

/**
 * @ngdoc directive
 * @name contactMgmtApp.directive:match
 * @description
 * # match
 */
angular.module('contactMgmtApp')
.directive('match', match);

function match($parse) {
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {

            if (!ctrl) {
                if (console && console.warn) {
                    console.warn('Match validation requires ngModel to be on the element');
                }
                return;
            }

            var matchGetter = $parse(attrs.match);

            scope.$watch(getMatchValue, function () {
                ctrl.$validate();
            });

            ctrl.$validators.match = function () {
                return ctrl.$viewValue === getMatchValue();
            };

            function getMatchValue() {
                var match = matchGetter(scope);
                if (angular.isObject(match) && match.hasOwnProperty('$viewValue')) {
                    match = match.$viewValue;
                }
                return match;
            }
        }
    };
}
