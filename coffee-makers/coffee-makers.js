'use strict'

angular.module("eprojectApp.coffee-makers",[])
.controller("coffee-makersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/coffee-makers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])