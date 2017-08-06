angular.module('moodikApp')
    .factory('AuthService', authService);

function authService($http, $location, $rootScope) {
    return {
        init: init,
        logout: logout
    }

    function init() {
        $http({
            method: 'GET',
            url: '/init'
        }).then(function (response) {
            $rootScope.user = response.data;
            $location.path('/dashboard/1');
        }, function () {
            $location.path('/login');
        });
    }

    function logout() {
        $http({
            method: 'GET',
            url: '/logout'
        }).then(function (response) {
            $location.path('/login');
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }
}
