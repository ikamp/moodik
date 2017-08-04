angular
    .module('moodikApp')
    .controller('LoginController', loginController);

function loginController($scope, $location, $rootScope, DataService) {
    $rootScope.flag = false;
    $scope.login =  {};

    if ($rootScope.user != null) {
        $location.path('/dashboard/1');
    }

    $scope.postLogin = function (data) {
        DataService.postLoginInfo(data, function (response) {
            $location.path('/dashboard/1');
        })
    }
}
