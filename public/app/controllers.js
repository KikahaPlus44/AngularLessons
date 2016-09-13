angular.module('controllers', [])
// Описываем различные контроллеры, зачем так много пока не ясно но пусть будут
// MainCtrl поключаем в индекс остальные подключаются по ходу дела в app.js
.controller('MainCtrl', function($rootScope){
    $rootScope.$on('$stateChangeError', 
        function(){
           alert('pizda')
           //state.go('dashboard') 
        }) 
    })
.controller('AppBodyCtrl', function(){
    console.log('AppBodyCtrl');
})
// В UsersCtrl переадем $scope потому что надо так,
// userRestApiFacrtory это наша фабрика которая формирует GET запрос к серверу 
// $state не очень ясно зачем возможно данные из app.js
.controller('UsersCtrl',function($scope, $rootScope, userRestApiFacrtory, $state, $uibModal, getUsersResolve){
    // создаем обьект users в $scope чтобы передать туда наш ответ с сервера
    $scope.users = [];
    $scope.users = getUsersResolve;
    // Пытаемся сортировать таблицу по клику на хеадер
    $scope.sortTypeName     = 'name'; // set the default sort type
    $scope.sortNName = 'nname';
    $scope.sortReverse  = false;  // set the default sort order
    // Собственно передаем ответ из фабрики в scope.users
    // userRestApiFacrtory.getUsers().
    
    // // Сервер вернул то что попросили
    // success(function(data, status, headers, config){
    //     //        var token = headers('http-token');
    //     $scope.users = data;
    //     console.log($scope.users);
    //     //clasic filter        
    //     //$scope.users = $filter('oderBy')(users, {'name' : search})
    // }).
    
    // // сервер вернул какую-то ошибку 
    // error(function(data){
    //     console.log(data);
    // });
    
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
    // HTML VALUE ON CLICK
    $scope.click = function (e) {
        var whatweclick = angular.element(e.target).text();
        console.log(whatweclick);
    };
    // Получаем данные из формы и отдаем их в фабрику на пост запрос
    $scope.addUser = function(user){
        console.log(user);
        userRestApiFacrtory.setUser(user).
        success(function(data){
            $scope.users.push(data);
            console.log(data);
        }).error(function(data){
            console.log(data);
        });
    };
    // $scope.deleteUser = function(id, $index){
    //     userRestApiFacrtory.deleteUser(id)
    //         .success(function(data){
    //             $scope.user.splice($index, 1)
    //         })
    // }
    // HOW $watch work
    // $scope.jigurda = 'Jigurda';

    // $timeout(function() {
    //     $scope.jigurda = 'Jigurda Atake!'
    // }, 5000);
    // $scope.$watch ('jigurda', function(newVal, oldVal){
    //     console.log(oldVal);
    //     console.log(newVal);
    // });
    $scope.jigurda2 = 'a';
    $rootScope.jigurdaOlolo = "b";
    // how to $apply() $digest()
    setTimeout(function() {
        $scope.jigurda2 = 'a1';
        $scope.$apply();
        $rootScope.jigurdaOlolo = 'b1'
    }, 2000);
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
        alert(data);
    });
});



