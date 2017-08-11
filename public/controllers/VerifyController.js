angular.module('moodikApp')
    .controller('VerifyController', verifyController);

function verifyController ($scope, $rootScope, DataService, NotificationService) {
    $rootScope.flag = false;

    $scope.sendCode = function () {
        DataService.sendCode(function () {
            NotificationService.showMessage('We send a new code!!');
        })
    }
}
