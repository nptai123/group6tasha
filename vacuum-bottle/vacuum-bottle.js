'use strict'

angular.module("eprojectApp.vacuum-bottle",[])
.controller("vacuum-bottleCtrl",['$scope', '$filter' ,'$http', '$routeParams', function($scope, $filter, $http, $routeParams){
     $scope.productsId = $routeParams.id;
    
    $http.get("json/vacuum-bottles.json").then(function(response){
        var data = response.data;
        $scope.products = $filter('filter')(data, {id: parseInt($scope.productsId)}, true)[0];
        console.log($scope.products);
     });   
}])