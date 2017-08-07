angular.module('moodikApp')
    .controller('VerifyController', verifyController);

function verifyController ($scope, $rootScope, DataService) {
    $rootScope.flag = false;

    $scope.sendCode = function () {
        DataService.sendCode(function () {
            $scope.message = "We send a new code!!"
        })
    }
}
