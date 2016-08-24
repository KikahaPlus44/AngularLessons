/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('factory', []).
factory('userRestApiFacrtory', function($http, generalItem){
    return {
        getUser: function() {
            return $http({
                metod: "GET",
                url: generalItem.options.urlUsers,
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                },
                getUser : function (id){
                    return $http ({
                        metod: "GET",
                        url: generalItem.options.urlUser(id),
                        headers: {
                            'Content-Type': 'aplication.json; charset=utf-8'
                        }
                    });
                }
            });
        }
    };
});


