'use strict'

angular.module("eprojectApp.cooking-pans",[])
.controller("cooking-pansCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/cooking-pans.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])