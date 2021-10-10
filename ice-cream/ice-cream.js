'use strict'

angular.module("eprojectApp.ice-cream",[])
.controller("ice-creamCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/ice-cream.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])