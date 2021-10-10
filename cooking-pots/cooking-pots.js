'use strict'

angular.module("eprojectApp.cooking-pots",[])
.controller("cooking-potsCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/cooking-pots.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])