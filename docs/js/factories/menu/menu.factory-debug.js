
angular.module('factories.menu', [])
    .factory('menuFactory', function ($http) {
        return {
            getRoutes: function () {
                return $http({
                    url: 'assets/categories.json',
                    method: 'GET'
                });
            }
        };
    });