var app = angular.module('myapp', [
    'controllers',
    'factory',
    'services',
    'ui.router',
    'directives',
    'ui.bootstrap'
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
        controller: 'UsersCtrl',
        resolve : {
            getUsersResolve : function ($q, userRestApiFacrtory) {
                var defer = $q.defer();
                userRestApiFacrtory.getUsers()
                    .success(function(data){
                        defer.resolve(data);
                        console.log(data);
                    })
                    .error(function(data){
                        defer.reject(data);
                    })
                return defer.promise;
            }
        }    
    })
    .state('app.user', {
        url: '/user/{id}',
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'
    });
});
// 
