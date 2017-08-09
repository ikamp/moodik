angular.module('moodikApp')
    .controller('DashboardController', dashboardController);

function dashboardController($scope, $rootScope, DataService, AuthService) {
    $rootScope.flag = true;

    $scope.$on('currentUser', function (event, args) {
        $scope.companyId = $rootScope.user.company_id;
        getDashboardData();
    });

    $scope.moodTagGroup = [];
    function  getDashboardData() {
        DataService.getEmployeeMoodList($scope.companyId, function (response) {
            var popularTags = [];
            var popularTopTags = [];
            $scope.getEmployeeMoodList = response;
            $scope.moodTags = _.groupBy($scope.getEmployeeMoodList, 'moodTag');

            $scope.popularTagList = _.each($scope.moodTags, function (key, item) {
                var temp = {};
                temp.name = item;
                temp.length = key.length;
                popularTags.push(temp);
            });

            popularTags = _.sortBy(popularTags, function (item) {
                return -item.length;
            });

            popularTopTags = _.first(popularTags, [5]);

            for (var i = 0; i <= popularTopTags.length - 1; i++) {
                $scope.moodTagGroup[i] = popularTopTags[i];
            }
        });
    }
}
