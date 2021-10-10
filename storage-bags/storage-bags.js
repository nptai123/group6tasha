'use strict'

angular.module("eprojectApp.storage-bags",[])
.controller("storage-bagsCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/storage-bags.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])