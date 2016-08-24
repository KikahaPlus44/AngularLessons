/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('services', []).
    service('generalItem', function(){
        var domain = 'http://jsonplaceholder.typicode.com/';
        this.options = {
            urlUsers : domain + 'users/',
            urlUser : function (id) {
                return domain + 'user/' + id + '/';
            }
        };
    }).
    filter('filterName', function(){
        return function (input, a){

            return "Hi " + input;

        }
    });
        

