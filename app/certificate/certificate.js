'use strict';

angular.module('PHSymposium2017.certificate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/certificate', {
    templateUrl: 'certificate/certificate.html',
    controller: 'CertificateCtrl'
  });
}])

.controller('CertificateCtrl', ['$scope', '$http', '$log', '$sce', function($scope, $http, $log, $sce) {
  var fullname = sessionStorage.fullname.replace(/ /g,"%20").replace(/["']/g, "");
  var cert = "http://res.cloudinary.com/chongcher/image/upload/w_800/l_text:arial_60:" + fullname + ",g_north,y_250,co_white/v1482053821/sample.jpg";
  $log.log(cert);
  $scope.certificateLink = $sce.trustAsResourceUrl(cert);
}]);
