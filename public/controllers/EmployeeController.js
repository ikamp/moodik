angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, DataService, $rootScope) {

    $scope.companyId = $rootScope.user.company_id;
    $scope.invite = function (employee) {
        DataService.postInvitedEmployee(employee, function (response) {

        })
    };

    DataService.getDepartmentList(function (response) {
        $scope.departments = response;
    });

    DataService.getEmployeeList($scope.companyId, function (response) {
        $scope.getEmployeeList = response;
    });
}
