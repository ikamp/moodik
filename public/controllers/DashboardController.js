angular.module('moodikApp')
    .controller('DashboardController', dashboardController);

function dashboardController($scope, $rootScope, $timeout, DataService) {
    $rootScope.flag = true;
    $rootScope.currentWeek = 1;
    $rootScope.beforeFourWeek = $rootScope.currentWeek - 3;
    $scope.$on('currentUser', function (event, args) {
        $scope.companyId = $rootScope.user.company_id;
    });

    $scope.sendMail = function () {
        DataService.sendMail(function () {
            $rootScope.message = "Emails sent.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        });
    }

    $scope.moodTagGroup = [];
    $scope.weekTake = 1;
    $scope.moodTagGroup = [];

    function getDashboardData() {
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

    $scope.$watch('weekTake', function () {
        if ($rootScope.currentWeek) {
            $rootScope.currentWeek = parseInt($scope.weekTake);
            $rootScope.beforeFourWeek = $rootScope.currentWeek - 3;
            if ($scope.companyId)
                employeeMoodList();
        }
    });

    function employeeMoodList() {
        DataService.getEmployeeMoodList($scope.companyId, function (response) {
            var popularTags = [];
            var weeklyTopTagsName = [];
            var weeklyTopTagsLength = [];
            var weeklyTopTagsWeek = [];
            var weeklyAverageMoods = [];
            var weeklyAverageMoodsPoint = [];
            var weeklyAverageMoodsWeek = [];
            var averageMoodsFourWeekPoint = [];
            var averageMoodsFourWeek = [];
            var currentTopTagsName = [];
            var currentTopTagsLength = [];
            var tagsFourWeekName = [];
            var tagsFourWeek = [];
            var companyFilledWeeks = [];
            var votedList = [];
            var votedListName = [];
            var votedListLength = [];
            var j = 0;
            var k = 0;

            $scope.getEmployeeMoodList = response;
            $scope.moodTags = _.groupBy($scope.getEmployeeMoodList, 'moodTag');
            $scope.weeklyMoods = _.groupBy($scope.getEmployeeMoodList, 'week');
            $scope.votedEmployees = _.groupBy($scope.getEmployeeMoodList, 'voted');


            $scope.popularTagList = _.each($scope.moodTags, function (key, item) {
                var temp = {};
                temp.name = item;
                temp.length = key.length;
                for (i = 0; i < key.length; i++) {
                    temp.week = key[i].week;
                }
                popularTags.push(temp);
            });

            $scope.votedList = _.each($scope.votedEmployees, function (key, item) {
                var temp = {};
                temp.name = item;
                temp.length = key.length;
                votedList.push(temp);
            });

            $scope.companyFilledWeeks = _.each($scope.weeklyMoods, function (key, item) {
                var temp = {};
                temp.name = item;
                companyFilledWeeks.push(temp);
            });

            $scope.weeklyAverageMoods = _.each($scope.weeklyMoods, function (key, item) {
                var temp = {};
                var total = 0;
                temp.week = item;
                for (i = 0; i < key.length; i++) {
                    total = total + key[i].point;
                }
                temp.averagePoint = total / key.length;
                weeklyAverageMoods.push(temp);
            });

            $scope.companyFilledWeeksShow = companyFilledWeeks;

            popularTags = _.sortBy(popularTags, function (item) {
                return -item.length;
            });

            var popularTopTags = _.first(popularTags, [5]);

            for (var i = 0; i <= popularTopTags.length - 1; i++) {
                $scope.moodTagGroup[i] = popularTopTags[i];
            }

            for (var i = 0; i <= popularTags.length - 1; i++) {
                weeklyTopTagsName[i] = popularTags[i].name;
                weeklyTopTagsLength[i] = popularTags[i].length;
                weeklyTopTagsWeek[i] = popularTags[i].week;
            }

            for (var i = 0; i <= votedList.length - 1; i++) {
                votedListName[i] = votedList[i].name;
                votedListLength[i] = votedList[i].length;
            }

            console.log(votedListName);
            console.log(votedListLength);

            for (var i = 0; i <= weeklyAverageMoods.length - 1; i++) {
                weeklyAverageMoodsPoint[i] = Math.round(weeklyAverageMoods[i].averagePoint);
                weeklyAverageMoodsWeek[i] = parseInt(weeklyAverageMoods[i].week);
            }

            for (var i = 0; i <= popularTags.length - 1; i++) {
                if (weeklyTopTagsWeek[i] == $rootScope.currentWeek) {
                    currentTopTagsName[j] = weeklyTopTagsName[i];
                    currentTopTagsLength[j] = weeklyTopTagsLength[i];
                    j++;
                }
            }

            for (var i = 0; i <= popularTags.length - 1; i++) {
                if (weeklyTopTagsWeek[i] == $rootScope.beforeFourWeek + k) {
                    tagsFourWeekName[j] = weeklyTopTagsName[i];
                    tagsFourWeek[j] = weeklyTopTagsWeek[i];
                    j++;

                    if (weeklyTopTagsWeek[i + 1] != $rootScope.beforeFourWeek + k) {
                        k++;
                    }

                    if (k == 4) {
                        i = popularTags.length;
                    }
                }
            }

            k = 0;

            for (var i = 0; i <= weeklyAverageMoods.length - 1; i++) {
                if (weeklyAverageMoodsWeek[i] == $rootScope.beforeFourWeek + k) {
                    averageMoodsFourWeekPoint[j] = weeklyAverageMoodsPoint[i];
                    averageMoodsFourWeek[j] = 'week: ' + weeklyAverageMoodsWeek[i];
                    k++;
                    j++;

                    if (k == 4) {
                        i = weeklyAverageMoods.length;
                    }
                }
            }

            var _data = {
                labels: currentTopTagsName,
                datasets: [{
                    data: currentTopTagsLength,
                    label: "tag",
                    borderColor: "rgb(65, 255, 57)",
                    backgroundColor: "rgba(105, 172, 98, 0.6)",
                    borderWidth: 0.5,
                    pointBorderColor: "rgb(65, 255, 57)",
                    pointBackgroundColor: "rgba(105, 172, 98, 0.6)",
                    pointBorderWidth: 1.5,
                    tension: -1,
                    yAxisID: "y-axis-1"
                }]
            };

            var _options = {
                scales: {
                    xAxes: [{
                        barThickness: 25
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            stepSize: 1,
                            max: 10
                        },
                        type: "linear",
                        display: true,
                        position: "left",
                        id: "y-axis-1"
                    }]
                }
            };

            new Chart(document.getElementById("bar-chart-horizontal").getContext("2d"), {
                type: "bar",
                data: _data,
                options: _options
            });

            new Chart(document.getElementById("line-chart"), {
                type: 'line',
                data: {
                    labels: tagsFourWeekName,
                    datasets: [{
                        data: tagsFourWeek,
                        scaleGridLineWidth: 1,
                        label: "Tags popularity",
                        borderColor: "rgba(105, 172, 98, 0.6)",
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            categoryPercentage: 0.3,
                            barPercentage: 1.0
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 1
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Popularity changes for Tags in Last 4 weeks'
                    }
                }
            });

            new Chart(document.getElementById("line-mood-chart"), {
                type: 'line',
                data: {
                    labels: averageMoodsFourWeek,
                    datasets: [{
                        data: averageMoodsFourWeekPoint,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        borderColor: 'rgba(0, 0, 0, 0.9)',
                        borderWidth: 4,
                        fill: false,
                        scaleGridLineWidth: 1,
                        label: "Mood Average"
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 1
                            },
                            gridLines: {
                                color: 'rgba(171,171,171,1)',
                                lineWidth: 1
                            }
                        }]
                    },
                    annotation: {
                        annotations: [{
                            type: 'box',
                            yScaleID: 'y-axis-0',
                            yMin: 4,
                            yMax: 5,
                            borderColor: 'rgba(0, 204, 0, 0.25)',
                            borderWidth: 1,
                            backgroundColor: 'rgba(0, 204, 0, 0.25)'
                        }, {
                            type: 'box',
                            yScaleID: 'y-axis-0',
                            yMin: 2,
                            yMax: 4,
                            borderColor: 'rgba(255, 255, 0, 0.25)',
                            borderWidth: 1,
                            backgroundColor: 'rgba(255, 255, 0, 0.25)'
                        }, {
                            type: 'box',
                            yScaleID: 'y-axis-0',
                            yMin: 0,
                            yMax: 2,
                            borderColor: 'rgba(255, 51, 51, 0.25)',
                            borderWidth: 2,
                            backgroundColor: 'rgba(255, 51, 51, 0.25)'

                        }]
                    },
                    title: {
                        display: true,
                        text: 'Mood averages for Last 4 weeks'
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            });
            new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                    labels: ["Non-Voted", "Voted"],
                    datasets: [{
                        label: "Voted Employees",
                        backgroundColor: ["rgba(105, 172, 98, 0.6)", "rgba(192, 83, 91, 0.6)"],
                        data: votedListLength
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Employee number who gave vote or not.'
                    }
                }
            });
        });
    }

    if ($rootScope.user.company_id) {
        $scope.companyId = $rootScope.user.company_id;
        getDashboardData();
        employeeMoodList();
    }
}
