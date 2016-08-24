var app = angular.module('myapp', [
    'controllers',
    'factory',
    'services',
    'ui.router'
]);
app.config(function($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/app/users'),
   $stateProvider
    .state('app',{
        url: '/app',
        templateUrl: 'templates/app-body.html',
        controller: 'AppBodyCtrl'
    })
    .state ('app.users',{
        url: '/users',
        templateUrl: 'templates/users.html',
        controller: 'UsersCtrl'
    })
    .state('app.user', {
        url: '/user/{id}',
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'
    });
});

