angular.module('films')

    .factory('LoginFactory', function () {
        return{
            usersData: [
                {
                    id: '1',
                    username: 'test1',
                    password: 'password1',
                    filmsSaved: {}
                },
                {
                    id: '2',
                    username: 'test2',
                    password: 'password2',
                    filmsSaved: {}
                }
            ]

        }
    })

    .factory('HomeFactory', ['$http', '$q', function ($http, $q) {
        return{
            getFilms: function(wsUrl, data){

                var defered = $q.defer();
                var promise = defered.promise;

                $http.get(wsUrl, {params: data})
                    .success(function (response) {
                        defered.resolve(response);
                    })
                    .error(function (error) {
                        defered.reject(error);
                    })
                return promise;
            }
        }
    }]);