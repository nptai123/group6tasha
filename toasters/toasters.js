'use strict'

angular.module("eprojectApp.toasters",[])
.controller("toastersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/toasters.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])