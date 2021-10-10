'use strict'

angular.module("eprojectApp.tawas",[])
.controller("tawasCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/tawas.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])