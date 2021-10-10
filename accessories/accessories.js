'use strict'

angular.module("eprojectApp.accessories",[])
.controller("accessoriesCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/accessories.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])