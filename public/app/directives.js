/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('directives', [])
.directive('name-1', function(){
	return {
		resrtict: 'E',
		link: function($scope, elem, attr){
			$scope.fullname = attr.first + " " + attr.last;
		},
		scope: true,
		replace: true,
		template: '<div>{{fullname}}</div>'
	}
});

