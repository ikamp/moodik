angular.module('moodikApp')
    .controller('DashboardController', dashboardController);

function dashboardController ($scope, $rootScope) {
    $rootScope.flag = true;
}
