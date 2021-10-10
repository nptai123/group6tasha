'use strict'

angular.module("eprojectApp.egg-poachers",[])
.controller("egg-poachersCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/egg-poachers.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])