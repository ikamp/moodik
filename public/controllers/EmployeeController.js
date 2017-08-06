angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, DataService, $routeParams) {

    $scope.companyId = $routeParams.id;

    DataService.getEmployeeList($scope.companyId, function (response) {
        $scope.getEmployeeList = response;
    });
}
