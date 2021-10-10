'use strict'

angular.module("eprojectApp.cookware-sets",[])
.controller("cookware-setsCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/cookware-sets.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])