'use strict'

angular.module("eprojectApp.blenders",[])
.controller("blendersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/blenders.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])