'use strict';

angular.module('PHSymposium2017.feedback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feedback', {
    templateUrl: 'feedback/feedback.html',
    controller: 'FeedbackCtrl'
  });
}])

.controller('FeedbackCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.form = {};

  $scope.q1Textbox = false;
  $scope.$watch('form.q1', function(value) {
       if(value == 'Emails_Received_From_SMU' || value == 'Emails_Received_From_MOE' || value == 'Emails_Received_From_Other_Institutions' || value == 'Word_of_Mouth'){
         $scope.q1Textbox = false;
         $scope.showQ1Textbox = null;
       } else {
         $scope.q1Textbox = true;
       }
 });

 $scope.$watch('showQ1Textbox', function(value) {
   //console.log("q2TB: ", value);
      if(value == 'true'){
        $scope.form.q1 = null;
        $scope.q1Textbox = true;
      } else {
        $scope.q1Textbox = false;
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
