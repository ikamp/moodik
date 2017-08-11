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
        postWeeklyMood: postWeeklyMood,
        sendCode: sendCode,
        saveInvitedEmployee: saveInvitedEmployee,
        removeEmployee: removeEmployee,
        updateDepartment: updateDepartment,
        newDepartment: newDepartment,
        sendMail: sendMail,
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
            .then(function () {
                callback();
            }, function (error) {
                errorCallback && errorCallback(error);
            });
    }

    function postRegisterInfo(data, callback, errorCallback) {
        $http.post('/register', angular.toJson(data))
            .then(function () {
                callback();
            }, function (error) {
                errorCallback && errorCallback(error);
            });
    }


    function saveInvitedEmployee (employee, callback, errorCallback) {
        $http.post('/invite', angular.toJson(employee))
            .then(function () {
                callback();
            }, function (error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function postInvitedEmployee (employee, callback, errorCallback) {
        $http.post('/api/employee', angular.toJson(employee))
            .then(function (response) {
                callback(response.data);
            }, function (error) {
                errorCallbak && errorCallbak(error);
            });
    }

    function removeEmployee (employee, callback, errorCallback) {
        $http.put('/api/employee/' + employee.id, angular.toJson(employee))
            .then(function (response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
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

    function postWeeklyMood(data, callback, errorCallback) {
        $http.post('api/mood', angular.toJson(data))
            .then(function () {
                callback();
            }, function (error) {
                errorCallback && errorCallback(error);
            });
    }

    function updateDepartment(employee, callback, errorCallback) {
        $http.put('/api/company/' + employee.employeeId, angular.toJson(employee))
            .then(function (response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function newDepartment(department, callback, errorCallback) {
        $http.post('/api/company', angular.toJson(department))
            .then(function (response) {
                callback(response.data);
            }, function (error) {
                errorCallback && errorCallback(error);
            });
    }

    function sendMail(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/mail'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }
}
