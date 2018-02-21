

function loadimageDirective() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function () {
                scope.$apply(attrs.loadimage);
            });
        }
    };
}


angular.module('directives.loadimage', [])
    .directive('loadimage', loadimageDirective);

