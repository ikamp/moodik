angular.module('moodikApp')
    .factory('AuthService', authService);

function authService($http, $location, $rootScope) {
    return {
        init: init,
        logout: logout,
        forgotPassword: forgotPassword,
        resetPassword: resetPassword
    }

    function init() {
        $http({
            method: 'GET',
            url: '/init'
        }).then(function (response) {
            $rootScope.user = response.data;
            $rootScope.$broadcast('currentUser');
            $location.path('/dashboard');
        }, function () {
            $location.path('/login');
        });
    }

    function logout() {
        $http({
            method: 'GET',
            url: '/logout'
        }).then(function (response) {
            $rootScope.user = null;
            $location.path('/login');
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function forgotPassword(data, callback, errorCallback) {
        $http.post('/password/email', angular.toJson(data))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function resetPassword(data, callback, errorCallback) {
        $http.post('/password/reset', angular.toJson(data))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }
}
