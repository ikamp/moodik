angular
    .module('moodikApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home', {
                templateUrl: 'template/index.html',
                controller: 'HomeController'
            })
            .when('/employee/:id', {
                templateUrl: 'template/employee.html',
                controller: 'EmployeeController'
            })
            .when('/dashboard/:id', {
                templateUrl: 'template/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/mymood/:id', {
                templateUrl: 'template/mymood.html',
                controller: 'MyMoodController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });