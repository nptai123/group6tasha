'use strict'

angular.module("eprojectApp.flask",[])
.controller("flaskCtrl",['$scope', '$http', function($scope, $http){
     $http.get("json/flask.json").then(function(response){
        var data = response.data;
        $scope.product = data;
     });   
}])