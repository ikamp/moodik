angular.module('moodikApp')
    .controller('WeeklyMoodController', weeklyMoodController);

function weeklyMoodController($scope, $rootScope, DataService, $location, $routeParams) {
    $rootScope.flag = false;
    $scope.weeklyMood = function (weekMood) {
        weekMood.employeeId = $rootScope.user.id;
        weekMood.week = $routeParams.id;
        weekMood.tags = Object.keys(weekMood.tag);
        DataService.postWeeklyMood(weekMood, function (response) {
            $location.path('/mymood');
            location.reload();
        })
    }
}