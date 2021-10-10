'use strict'

angular.module("eprojectApp.spice-jars",[])
.controller("spice-jarsCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/spice-jars.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])