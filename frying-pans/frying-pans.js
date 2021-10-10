'use strict'

angular.module("eprojectApp.frying-pans",[])
.controller("frying-pansCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/frying-pans.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])