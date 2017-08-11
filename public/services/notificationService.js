angular.module('moodikApp')
    .factory('NotificationService', notificationService);

function notificationService($rootScope, $timeout) {
    return {
        showMessage: showMessage,
    }

    function showMessage(message) {
        $rootScope.message = message;
        $timeout(function () {
            $rootScope.message = false;
        }, 4000);
    }
}
