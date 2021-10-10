'use strict'

angular.module("eprojectApp.catalog",[])
.controller("catalogCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/product.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])