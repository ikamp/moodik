angular.module('moodikApp')
    .controller('BaseController', baseController);

function baseController ($scope, $rootScope, $location, AuthService) {
    $rootScope.flag = true;

    $scope.logout = function () {
        AuthService.logout(function () {
            $location.path('/login');
        });
    }
}
