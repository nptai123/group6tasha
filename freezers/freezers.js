'use strict'

angular.module("eprojectApp.freezers",[])
.controller("freezersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/freezers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])