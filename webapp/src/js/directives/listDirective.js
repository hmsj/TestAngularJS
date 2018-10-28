angular.module('films')
    .directive('filmDetailsList', [function () {
        return{
            templateUrl: './src/templates/filmDetails.html',
            scope:{
                films: '=',

            },
            link: function ($scope) {
                $scope.test = function () {
                    console.info($scope.films.title);
                }
            }
        }
    }]);