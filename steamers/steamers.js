'use strict'

angular.module("eprojectApp.steamers",[])
.controller("steamersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/steamers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])