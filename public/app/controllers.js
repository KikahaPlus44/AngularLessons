angular.module('controllers', [])
// Описываем различные контроллеры, зачем так много пока не ясно но пусть будут
// MainCtrl поключаем в индекс остальные подключаются по ходу дела в app.js
.controller('MainCtrl', function(){
    console.log('MainCtrl');

})
.controller('AppBodyCtrl', function(){
    console.log('AppBodyCtrl');
})
// В UsersCtrl переадем $scope потому что надо так,
// userRestApiFacrtory это наша фабрика которая формирует GET запрос к серверу 
// $state не очень ясно зачем возможно данные из app.js
.controller('UsersCtrl',function($scope, userRestApiFacrtory, $state, $uibModal){
    // создаем обьект users в $scope чтобы передать туда наш ответ с сервера
    $scope.users = [];
    // Пытаемся сортировать таблицу по клику на хеадер
    $scope.sortTypeName     = 'name'; // set the default sort type
    $scope.sortNName = 'nname';
    $scope.sortReverse  = false;  // set the default sort order

    // Собственно передаем ответ из фабрики в scope.users
    userRestApiFacrtory.getUsers().
    
    // Сервер вернул то что попросили
    success(function(data, status, headers, config){
        //        var token = headers('http-token');
        $scope.users = data;
        console.log($scope.users);
        //clasic filter        
        //$scope.users = $filter('oderBy')(users, {'name' : search})
    }).
    
    // сервер вернул какую-то ошибку 
    error(function(data){
        console.log(data);
    });
    
    // это ui-rout вызывается ng-click по строке с юзером
    // получает оттуда же id кликнутого юзера и отправляет на новый view  
    $scope.userInfo = function(id){
        $state.go('app.user', {id:id});
    };
    $scope.onSubmit = function(formData){
        console.log(formData);
    };
    $scope.openUserModal = function () {
        $scope.addNewUserModal = $uibModal.open({
            templateUrl: '/templates/userModal.html',
            scope: $scope,
            size: 'lg',
            animation: true
        });
    };
})
// в этом контроллере мы получаем обьект с данными юзера
// $stateParams встроенный метод для получения параметров нашего $state (конкретно тут id)
// но в целом так же как и UsersCtrl 
.controller('UserCtrl', function($scope, userRestApiFacrtory, $stateParams){
    $scope.user = [];
    userRestApiFacrtory.getUser($stateParams.id).
    success(function(data, status, headers, config){
        $scope.user = data;
        console.log($scope.user);
    })
    .error(function(data){
        console.log(data);
    });
});



