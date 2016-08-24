angular.module('controllers', []).
controller('MainCtrl', function(){
    console.log('MainCtrl');

})
.controller('AppBodyCtrl', function(){
    console.log('AppBodyCtrl');
})
.controller('UsersCtrl',function($scope, userRestApiFacrtory, $state){
    $scope.users = [];
    console.log('UsersCtrl');
    userRestApiFacrtory.getUser().
    success(function(data, status, headers, config){
        //        var token = headers('http-token');
        $scope.users = data;
        console.log($scope.users);
        //clasic filter        
        //$scope.users = $filter('oderBy')(users, {'name' : search})
    }).
    error(function(data){
        console.log(data);
    });
    $scope.userInfo = function(id){
        $state.go('app.user', {id:id});
    };
 })
 .controller('UserCtrl', function($scope, userRestApiFacrtory, $stateParams){
    userRestApiFacrtory.getUser($stateParams.id);
});



