angular
    .module('moodikApp')
    .factory('MyHttpInterceptor', myHttpInterceptor);

function myHttpInterceptor($q, $timeout, $rootScope, $location) {
    return {

        'response': function(response) {
            if (response.status == 203) {
                $location.path('verify');
            }
            return response;
        },
        'responseError': function(rejection) {
            if (rejection.status == 401) {
                $location.path('login');
            } else if (rejection.status == 403) {
                $rootScope.message = "You don't have right permission to visit that page.";
                $timeout(function () {
                    $rootScope.message = false;
                }, 4000);
                $location.path('mymood');
            }
            return $q.reject(rejection);
        }
    };
};
