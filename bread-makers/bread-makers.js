'use strict'

angular.module("eprojectApp.bread-makers",[])
.controller("bread-makersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/bread-makers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])