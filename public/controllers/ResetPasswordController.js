angular.module('moodikApp')
    .controller('ResetPasswordController', resetPasswordController);

function resetPasswordController ($scope, $rootScope, $location, $routeParams, AuthService) {
    $rootScope.flag = false;
    $scope.reset = {
        'token': $routeParams.token
    }
    $scope.postNewPassword = function (data) {
        AuthService.resetPassword(data, function () {
            $location.path('/login');
        })
    }
}
