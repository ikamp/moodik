angular
    .module('moodikApp')
    .controller('HomeController', homeController);

function homeController($scope) {
    $scope.tab = 'home';
}