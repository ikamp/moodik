angular.module('moodikApp')
    .controller('EmployeeController', employeeController);

function employeeController ($scope, $rootScope, DataService, NotificationService) {
    $scope.departmentChangeEmployee = {};
    $scope.companyId = $rootScope.user.company_id;
    $scope.department = {};

    if ($rootScope.user && $rootScope.user.company_id) {
        employeeList()
    }

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    $scope.remove = function (employee) {
        DataService.removeEmployee(employee, function () {
            NotificationService.showMessage('Employee removed in your company.');
        })
    };

    $scope.changedEmployee= function (employee) {
        $scope.departmentChangeEmployee.employeeId = employee.id;
    };

    $scope.changedDepartment = function (newDepartment) {
        $scope.departmentChangeEmployee.departmentId = newDepartment.id;

        DataService.updateDepartment($scope.departmentChangeEmployee, function () {
            NotificationService.showMessage("Employee's department updated.");
        })
    };

    $scope.newDepartment = function (department) {
        $scope.department.companyId = $rootScope.user.company_id;
        DataService.newDepartment(department, function () {
            NotificationService.showMessage("New department added.");
        })
    };

    $scope.invite = function (employee) {
        DataService.postInvitedEmployee(employee, function () {
            NotificationService.showMessage("Employee invited.");
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
