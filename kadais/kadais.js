'use strict'

angular.module("eprojectApp.kadais",[])
.controller("kadaisCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/kadais.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])