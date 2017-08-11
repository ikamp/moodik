angular.module('moodikApp')
    .controller('ForgotPasswordController', forgotPasswordController);

function forgotPasswordController ($scope, $rootScope, AuthService) {
    $rootScope.flag = false;
    $scope.forget =  {};

    $scope.postForget = function (data) {
        AuthService.forgotPassword(data, function () {
            $scope.messages = "We have e-mailed your password reset link!";
        })
    }
}
