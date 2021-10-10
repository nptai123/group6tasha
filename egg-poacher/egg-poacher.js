'use strict'

angular.module("eprojectApp.egg-poacher",[])
.controller("egg-poacherCtrl",['$scope', '$filter' ,'$http', '$routeParams', function($scope, $filter, $http, $routeParams){
     $scope.productsId = $routeParams.id;
    
    $http.get("json/egg-poachers.json").then(function(response){
        var data = response.data;
        $scope.products = $filter('filter')(data, {id: parseInt($scope.productsId)}, true)[0];
        console.log($scope.products);
     });   
}])