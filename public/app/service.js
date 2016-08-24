/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('services', [])
// загоняем адрес нашего REST API в перменную, для более лучшего управления проектом
.service('generalItem', function(){
    var domain = 'http://jsonplaceholder.typicode.com/';
    this.options = {
        // тут у нас лежат юзеры
        urlUsers : domain + 'users/',
        // тут у нас лежит нужный юзер с нужным id получаем его чтобы наш роутер знал какого юзера открывать
        urlUser : function (id) {
            return domain + 'users/' + id + '/';
        }
    };
});
        

