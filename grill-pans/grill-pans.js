'use strict'

angular.module("eprojectApp.grill-pans",[])
.controller("grill-pansCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/grill-pans.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])