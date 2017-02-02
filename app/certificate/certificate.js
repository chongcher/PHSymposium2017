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
  var cert = "https://res.cloudinary.com/chongcher/image/upload/w_1600/l_text:lato_60_center:" + fullname + ",g_north,y_480,x_-100,co_black/v1485750208/symposium_coa.png";
  $log.log(cert);
  $scope.certificateLink = $sce.trustAsResourceUrl(cert);
  $scope.certificate = cert;
}]);
