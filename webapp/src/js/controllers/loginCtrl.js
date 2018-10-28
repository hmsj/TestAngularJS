angular.module('films')
    .controller('LoginCtrl', ['$rootScope','$window', '$scope', '$filter', 'LoginFactory', function ($rootScope, $window, $scope, $filter, LoginFactory) {
        $scope.restoreValues = function(){
            $rootScope.userLogged = {};
            $scope.enableBtn();

        }

        $scope.enableBtn = function(user, pass){
            if(user==='' || pass===''){
                return true;
            }else{
                return false;
            }
        }

        $scope.doLogin = function (user, pass) {

            let users = LoginFactory.usersData;
            let username = '';

            while(!$rootScope.userLogged.username){
                for(let i=0; i<users.length; i++){
                    if(users[i].username===user){
                        username = users[i].username;
                        if(users[i].password===pass){
                            $scope.username = user;
                            $scope.password = pass;
                            $rootScope.userLogged = users[i];
                        }
                    }
                }
            }
        }
    }]);