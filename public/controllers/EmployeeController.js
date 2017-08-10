angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, $timeout, DataService, $rootScope) {
    $scope.departmentChangeEmployee = {};
    $scope.companyId = $rootScope.user.company_id;
    $scope.department = {};

    if ($rootScope.user && $rootScope.user.company_id) {
        employeeList()
    }

    $scope.remove = function (employee) {
        DataService.removeEmployee(employee, function () {
            $rootScope.message = "Employee removed in your company.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    $scope.changedEmployee= function (employee) {
        $scope.departmentChangeEmployee.employeeId = employee.id;
    };

    $scope.changedDepartment = function (newDepartment) {
        $scope.departmentChangeEmployee.departmentId = newDepartment.id;

        DataService.updateDepartment($scope.departmentChangeEmployee, function () {
            $rootScope.message = "Employee's department updated.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    $scope.newDepartment = function (department) {
        $scope.department.companyId = $rootScope.user.company_id;
        DataService.newDepartment(department, function () {
            $rootScope.message = "New department added.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    $scope.invite = function (employee) {
        DataService.postInvitedEmployee(employee, function () {
            $rootScope.message = "Employee invited.";
            $timeout(function () {
                $rootScope.message = false;
            }, 4000);
        })
    };

    DataService.getDepartmentList(function (response) {
        $scope.departments = response;
    });

    function employeeList() {
        DataService.getEmployeeList($scope.companyId, function (response) {
            $scope.getEmployeeList = response;
        });
    }
}
