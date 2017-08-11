angular.module('moodikApp')
    .controller('ForgotPasswordController', forgotPasswordController);

function forgotPasswordController ($scope, $rootScope, NotificationService, AuthService) {
    $rootScope.flag = false;
    $scope.forget =  {};

    $scope.postForget = function (data) {
        AuthService.forgotPassword(data, function () {
            NotificationService.showMessage('We have e-mailed your password reset link!.');
        })
    }
}
