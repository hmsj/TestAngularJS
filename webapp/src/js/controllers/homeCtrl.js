angular.module('films')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$http', 'HomeFactory', function ($rootScope, $scope, $http, HomeFactory) {
        const urlBase = "http://www.omdbapi.com/?apikey=f12ba140";

        $scope.init = function(){
            $scope.types = ['','movie', 'series', 'episode'];
            $scope.plotsLength = ['', 'full', 'short'];
            $rootScope.filmsFound = {};
        }

        $scope.isKeyAllowed = function(event){
            if(event && 48<event.charCode<57){
                return true;
            }else {
                return false;
            }
        }

        $scope.buscarFilms = function () {
            var data = buildUrl();

            HomeFactory.getFilms(urlBase, data)
                .then(function (response) {
                    if(!$rootScope.filmsFound.imdbID || response.imdbID!==$rootScope.filmsFound.imdbID ){
                        $rootScope.filmsFound = response;
                    }

                });

        }

        function buildUrl() {
            let data = {};

            if($scope.filmTitle && $scope.filmTitle!==''){
                data.t = $scope.filmTitle;
            }

            if($scope.filmType && $scope.filmType!==''){
                data.type= $scope.filmType;
            }

            if($scope.filmYear && $scope.filmYear!==''){
                data.y= $scope.filmYear;
            }

            if($scope.filmPlot && $scope.filmPlot!==''){
                data.plot= $scope.filmPlot;
            }
            return data;
        }
    }]);

