'use strict'

angular.module("eprojectApp.lunch-boxes",[])
.controller("lunch-boxesCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/lunch-boxes.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])