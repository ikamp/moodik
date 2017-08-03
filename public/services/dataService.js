angular.module('moodikApp')
    .factory('DataService', dataService);

function dataService($http) {
    return {
        getEmployeeList: getEmployeeList
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
}
