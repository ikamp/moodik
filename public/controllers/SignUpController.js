angular
    .module('moodikApp')
    .controller('SignUpController', signUpController);

function signUpController($scope, $rootScope, $location, DataService) {
    $rootScope.flag = false;
    $scope.register =  {};

    $scope.postRegister = function (data) {
        DataService.postRegisterInfo(data, function (response) {
            $location.path('/dashboard/1');
        })
    }
}
