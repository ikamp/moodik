angular
    .module('moodikApp')
    .factory('MyHttpInterceptor', myHttpInterceptor);

function myHttpInterceptor($q, $location) {
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
            } else if (rejection.status == 406) {
                $rootScope.message = "Your passwords not matched.";
                $timeout(function () {
                    $rootScope.message = false;
                }, 4000);
            }
            return $q.reject(rejection);
        }
    };
};
