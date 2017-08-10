angular.module('moodikApp')
    .controller('WeeklyMoodController', weeklyMoodController);

function weeklyMoodController($scope, $rootScope, DataService, $location) {

    $scope.weeklyMood = function (weekMood) {
         weekMood.employeeId = $rootScope.user.id;
         weekMood.week = 11;
         weekMood.tags = Object.keys(weekMood.tag);
           DataService.postWeeklyMood(weekMood, function (response) {
               $location.path('/mymood');
           })
    }
}