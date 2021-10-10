'use strict'

angular.module("eprojectApp.coffee-maker",[])
.controller("coffee-makerCtrl",['$scope', '$filter' ,'$http', '$routeParams', function($scope, $filter, $http, $routeParams){
     $scope.productsId = $routeParams.id;
    
    $http.get("json/coffee-makers.json").then(function(response){
        var data = response.data;
        $scope.products = $filter('filter')(data, {id: parseInt($scope.productsId)}, true)[0];
        console.log($scope.products);
     });   
}])