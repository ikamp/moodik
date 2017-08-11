angular
    .module('moodikApp')
    .factory('MyHttpInterceptor', myHttpInterceptor);

function myHttpInterceptor($q, $location, NotificationService) {
    return {

        'response': function(response) {
            if (response.status == 203) {
                $location.path('/verify');
            }
            return response;
        },
        'responseError': function(rejection) {
            if (rejection.status == 401) {
                $location.path('/login');
            } else if (rejection.status == 406) {
                NotificationService.showMessage('Your passwords not matched.');
            } else if (rejection.status == 403) {
                NotificationService.showMessage("You don't have right permission to visit that page.");
                $location.path('/mymood');
            }
            return $q.reject(rejection);
        }
    };
};
