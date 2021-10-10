'use strict'

angular.module("eprojectApp.lunch-boxe",[])
.controller("lunch-boxeCtrl",['$scope', '$filter' ,'$http', '$routeParams', function($scope, $filter, $http, $routeParams){
     $scope.productsId = $routeParams.id;
    
    $http.get("json/lunch-boxes.json").then(function(response){
        var data = response.data;
        $scope.products = $filter('filter')(data, {id: parseInt($scope.productsId)}, true)[0];
        console.log($scope.products);
     });   
}])