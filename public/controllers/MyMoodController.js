angular.module('moodikApp')
    .controller('MyMoodController', myMoodController);

function myMoodController($scope, $timeout, DataService, $rootScope) {
    $scope.employeeId = $rootScope.user.id;
    $rootScope.flag = true;
    $scope.mapMood = [
        'Very sad',
        'Sad',
        'Normal',
        'Happy',
        'Very happy'
    ];

    if ($scope.employeeId) {
        DataService.getMyMoodList($scope.employeeId, function (response) {
            $scope.size = [];
            $scope.total = 0;
            $scope.percentageMoods = [];
            $scope.getMyMoodList = response;
            $scope.getMyMoodAverage = response[0];
            $scope.totalMoods = response.length;
            $scope.point = _.groupBy(response, 'point');

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
                type: 'doughnut',
                data: {
                    labels: [
                        'Very sad' + '(' + $scope.percentageMoods[1] + '%)',
                        'Sad' + '(' + $scope.percentageMoods[2] + '%)',
                        'Normal' + '(' + $scope.percentageMoods[3] + '%)',
                        'Happy' + '(' + $scope.percentageMoods[4] + '%)',
                        'Very happy' + '(' + $scope.percentageMoods[5] + '%)'
                    ],
                    datasets: [{
                        label: "Mood percentages",
                        backgroundColor: ["#BE0202", "#D44D4D", "#D0630A", "#ACD00A", "#2EA702"],
                        data: [$scope.size[1], $scope.size[2], $scope.size[3], $scope.size[4], $scope.size[5]]
                    }]
                },
                options: {
                    legend: {
                        position: 'right'
                    }
                }
            });

            new Chart(document.getElementById("line-chart-graph"), {
                type: 'line',
                data: {
                    labels: ["26/17", "27/17", "28/17", "29/17", "30/17"]   ,
                    datasets: [{
                        data: [20, 3, 1, 5, 4],
                        label: "Moods in all week",
                        borderColor: "#3e95cd",
                        fill: false
                    }]
                }
            });
        });
    }
}
