'use strict';

angular.module('PHSymposium2017.feedback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feedback', {
    templateUrl: 'feedback/feedback.html',
    controller: 'FeedbackCtrl'
  });
}])

.controller('FeedbackCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.$watch('form.q2', function(value) {
       if(value == 'Other'){
         $scope.q2Textbox = true;
       } else {
         $scope.q2Textbox = false;
       }
 });

  $scope.submit = function() {
    var form = $scope.form;
    var jsonForm = angular.toJson(form, true);
    $http.post('https://93j0zzjzlh.execute-api.ap-southeast-1.amazonaws.com/Testing/', jsonForm).then(function successCallback(response) {
      var fullname = JSON.stringify(response.data.fullname);
      sessionStorage.fullname = fullname;
      //alert("Success from http POST request: " + sessionStorage.fullname);
      $location.path("/certificate");
    }, function errorCallback(response){
      alert("Error from http POST request: ", JSON.stringify(response));
    });
  }
}]);
