angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, DataService, $rootScope) {

    $scope.companyId = $rootScope.user.company_id;

    DataService.getEmployeeList($scope.companyId, function (response) {
        $scope.getEmployeeList = response;
    });
}
