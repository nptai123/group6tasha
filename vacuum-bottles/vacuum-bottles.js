'use strict'

angular.module("eprojectApp.vacuum-bottles",[])
.controller("vacuum-bottlesCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/vacuum-bottles.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])