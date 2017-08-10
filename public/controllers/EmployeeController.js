angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, $timeout, DataService, $rootScope) {

    $scope.companyId = $rootScope.user.company_id;

    $scope.remove = function (employee) {
        DataService.removeEmployee(employee, function () {
            $rootScope.message = "Employee removed in your company.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    $scope.invite = function (employee) {
        DataService.postInvitedEmployee(employee, function (response) {
            $rootScope.message = "Employee invited.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    DataService.getDepartmentList(function (response) {
        $scope.departments = response;
    });

    DataService.getEmployeeList($scope.companyId, function (response) {
        $scope.getEmployeeList = response;
    });
}
