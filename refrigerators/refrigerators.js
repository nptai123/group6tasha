'use strict'

angular.module("eprojectApp.refrigerators",[])
.controller("refrigeratorsCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/refrigerators.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])