'use strict';

// Declare app level module which depends on views, and components
angular.module('PHSymposium2017', [
  'ngRoute',
  'ngSanitize',
  'PHSymposium2017.feedback',
  'PHSymposium2017.certificate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when("/certificate", {
      templateUrl : "certificate/certificate.html",
      controller : "CertificateCtrl"
    })
    .otherwise({redirectTo: '/feedback'});
}]);
