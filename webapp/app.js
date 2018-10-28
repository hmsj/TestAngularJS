angular.module('films', [
    'ngRoute'
])
.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './src/templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: './src/templates/login.html',
                controller: 'LoginCtrl'
            });
    }
])
