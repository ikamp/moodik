angular.module('moodikApp')
    .factory('DataService', dataService);

function dataService($http) {
    return {
        getEmployeeList: getEmployeeList,
        postLoginInfo: postLoginInfo,
        postRegisterInfo: postRegisterInfo,
        sendCode: sendCode
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
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function postRegisterInfo(data, callback, errorCallback) {
        $http.post('/register', angular.toJson(data))
            .then(function(response) {
                callback(response.data);
            }, function(error) {
                errorCallback && errorCallback(error);
            });
    }

    function sendCode(callback, errorCalllback) {
        $http({
            method: 'GET',
            url: '/newcode'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }
}
