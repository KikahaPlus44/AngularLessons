/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('factory', []).
// Фабрика для наших запросов к API сервера
factory('userRestApiFacrtory', function($http, generalItem){
    return {
        getUsers: function() {
            return $http({
                metod: "GET",
                // url генерится в нашем сервисе и становится сюда
                url: generalItem.options.urlUsers,
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                }
                
            });
        },
        getUser : function (id){
            return $http ({
                metod: "GET",
                // url генерится в нашем сервисе и становится сюда плюс передаем id нашего юзера
                url: generalItem.options.urlUser(id),
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                }
            });
        },
        setUser : function (user){
            return $http({
                metod: "POST",
                url: generalItem.options.urlUsers,
                data: user
                // headers: {
                //     'Content-Type': 'aplication.json; charset=utf-8'
                // }
            });
        }
    };
});


