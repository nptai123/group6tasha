'use strict'

angular.module("eprojectApp.electric-kettles",[])
.controller("electric-kettlesCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/electric-kettles.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])