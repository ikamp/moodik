angular.module('moodikApp')
    .factory('DataService', dataService);

function dataService($http) {
    return {
        getDepartmentList: getDepartmentList,
        getEmployeeList: getEmployeeList,
        getMyMoodList: getMyMoodList,
        getEmployeeMoodList: getEmployeeMoodList,
        postLoginInfo: postLoginInfo,
        postRegisterInfo: postRegisterInfo,
        postInvitedEmployee: postInvitedEmployee,
        sendCode: sendCode,
        saveInvitedEmployee: saveInvitedEmployee,
        removeEmployee: removeEmployee,
        updateDepartment: updateDepartment,
        newDepartment: newDepartment
    }

    function getDepartmentList(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/employee/'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function getEmployeeList(companyId, callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/employee/' + companyId
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function postLoginInfo(data, callback, errorCallback) {
        $http.post('/login', angular.toJson(data))
            .then(function() {
                callback();
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function postRegisterInfo(data, callback, errorCallback) {
        $http.post('/register', angular.toJson(data))
            .then(function() {
                callback();
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function saveInvitedEmployee (employee, callback, errorCallbak) {
        $http.post('/invite', angular.toJson(employee))
            .then(function() {
                callback();
            }, function(error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function postInvitedEmployee (employee, callback, errorCallbak) {
        $http.post('/api/employee', angular.toJson(employee))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function removeEmployee (employee, callback, errorCallbak) {
        $http.put('/api/employee/' + employee.id, angular.toJson(employee))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function sendCode(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/newcode'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function getEmployeeMoodList(companyId, callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/company/' + companyId
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function getMyMoodList(employeeId, callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/mood/' + employeeId
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function updateDepartment(employee, callback, errorCallbak) {
        $http.put('/api/company/' + employee.employeeId, angular.toJson(employee))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function newDepartment(department, callback, errorCallbak) {
        $http.post('/api/company', angular.toJson(department))
            .then(function (response) {
                callback(response.data);
            }, function (error) {
                errorCallbak && errorCallbak(error);
            });
    }
}
