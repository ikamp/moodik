angular
    .module('moodikApp', ['ngRoute', 'ngMessages'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.interceptors.push('MyHttpInterceptor');
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/login', {
                templateUrl: 'template/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'template/signup.html',
                controller: 'SignUpController'
            })
            .when('/password/reset', {
                templateUrl: 'template/forgot.html',
                controller: 'ForgotPasswordController'
            })
            .when('/password/reset/:token', {
                templateUrl: 'template/newpassword.html',
                controller: 'ResetPasswordController'
            })
            .when('/verify', {
                templateUrl: 'template/verify.html',
                controller: 'VerifyController'
            })
            .when('/employee', {
                templateUrl: 'template/employee.html',
                controller: 'EmployeeController'
            })
            .when('/dashboard', {
                templateUrl: 'template/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/mymood', {
                templateUrl: 'template/mymood.html',
                controller: 'MyMoodController'
            })
            .when('/weeklymood/:id', {
                templateUrl: 'template/mood.html',
                controller: 'WeeklyMoodController'
            })
            .when('/password/new/:token', {
                templateUrl: 'template/invite.html',
                controller: 'InviteController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    })
    .run(function(AuthService) {
        var url = window.location.href;
        var n = url.indexOf('password');
        var s = url.indexOf('weeklymood');
        if (n === -1 && s === -1) {
            AuthService.init();
        }
    });
