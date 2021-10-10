'use strict'

angular.module("eprojectApp.handis",[])
.controller("handisCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/handis.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])