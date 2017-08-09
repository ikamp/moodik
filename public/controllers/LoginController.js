angular
    .module('moodikApp')
    .controller('LoginController', loginController);

function loginController($scope, $location, $rootScope, DataService, AuthService) {
    $rootScope.flag = false;
    $scope.login =  {};

    if ($rootScope.user != null) {
        $location.path('/dashboard');
    }

    $scope.postLogin = function (data) {
        DataService.postLoginInfo(data, function (response) {
            AuthService.init();
            $location.path('/dashboard');
        })
    }
}
