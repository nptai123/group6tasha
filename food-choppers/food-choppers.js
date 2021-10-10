'use strict'

angular.module("eprojectApp.food-choppers",[])
.controller("food-choppersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/food-choppers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])