'use strict'

angular.module("eprojectApp.knives",[])
.controller("knivesCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/knives.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])