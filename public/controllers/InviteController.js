angular.module('moodikApp')
    .controller('InviteController', inviteController);

function inviteController ($scope, $rootScope, $location, $routeParams, DataService, AuthService) {
    $rootScope.flag = false;
    $scope.invitedUser = {
        'token': $routeParams.token
    }

    $scope.postNewUser = function (employee) {
        DataService.saveInvitedEmployee(employee, function () {
            AuthService.init();
        });
    }
}
