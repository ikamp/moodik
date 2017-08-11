angular.module('moodikApp')
    .controller('MyMoodController', myMoodController);

function myMoodController($scope, DataService, $rootScope) {
    $rootScope.flag = true;
    $scope.mapMood = [
        'Very sad',
        'Sad',
        'Normal',
        'Happy',
        'Very happy'
    ];

    $scope.$on('currentUser', function (event, args) {
        getMyMoodData();
    });

    function getMyMoodData() {
        if ($rootScope.user && $rootScope.user.id) {
            $scope.employeeId = $rootScope.user && $rootScope.user.id;
            DataService.getMyMoodList($scope.employeeId, function (response) {
                $scope.size = [];
                $scope.total = 0;
                $scope.percentageMoods = [];
                $scope.getMyMoodList = response;
                $scope.getMyMoodAverage = response[0];
                $scope.totalMoods = response.length;
                var weekMood = [];
                var weekMoodWeek = [];
                var weekMoodPoint = [];


                $scope.weekMood = _.each($scope.getMyMoodList, function (key, item) {
                    var temp = {};
                    temp.week = key.date.week;
                    temp.point = key.point;
                    weekMood.push(temp);
                });

                $scope.sortWeek = _.sortBy(weekMood, 'week');
                $scope.point = _.groupBy(response, 'point');

                for (var i = 0; i <= $scope.sortWeek.length - 1; i++) {
                    weekMoodWeek[i] = 'Week: ' + $scope.sortWeek[i].week;
                    weekMoodPoint[i] = $scope.sortWeek[i].point;
                }

                for (var i = 1; i <= 5; i++) {
                    $scope.size[i] = _.size($scope.point[i]);
                    $scope.total = $scope.total + $scope.size[i];
                    $scope.totalPercentage = 100 / $scope.total;
                }
                for (var i = 1; i <= 5; i++) {
                    $scope.percentageMoods[i] = $scope.size[i] * $scope.totalPercentage;
                    $scope.percentageMoods[i] = $scope.percentageMoods[i].toFixed(1);
                }

                new Chart(document.getElementById("doughnut-distribution"), {
                    type: 'pie',
                    data: {
                        labels: [
                            'Very sad' + '(' + $scope.percentageMoods[1] + '%)',
                            'Sad' + '(' + $scope.percentageMoods[2] + '%)',
                            'Normal' + '(' + $scope.percentageMoods[3] + '%)',
                            'Happy' + '(' + $scope.percentageMoods[4] + '%)',
                            'Very happy' + '(' + $scope.percentageMoods[5] + '%)'
                        ],
                        datasets: [{
                            label: "Distrubution",
                            backgroundColor: ["#E02700", "#DB6609", "#DBA309", "#C3D709", "#6DCB00"],
                            data: [$scope.size[1], $scope.size[2], $scope.size[3], $scope.size[4], $scope.size[5]]
                        }]
                    },
                    options: {
                        legend: {
                            position: 'bottom',
                            fullWidth: 'false',
                            labels: {
                                display: false
                            },
                            responsive: true,
                            maintainAspectRatio: false
                        }

                    }
                });

                document.getElementById("doughnut-distribution").style.height = '200px';
                document.getElementById("doughnut-distribution").style.width = '250px';

                new Chart(document.getElementById("line-chart-graph"), {
                    type: 'line',
                    data: {
                        labels: weekMoodWeek,
                        datasets: [{
                            data: weekMoodPoint,
                            label: "Mood point",
                            borderColor: "#e6614f",
                            fill: false
                        }]
                    }
                });
            });
        }
    }

    if ($rootScope.user && $rootScope.user.id) {
        getMyMoodData();
    }
}
