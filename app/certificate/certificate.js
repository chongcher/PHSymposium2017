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
  //$log.log(cert);
  var cert = new Image();
  cert.setAttribute('crossOrigin', 'anonymous'); // Avoid tainted canvas when downloading (CORS error)
  cert.src = "https://res.cloudinary.com/chongcher/image/upload/w_1600/l_text:lato_60_center:" + fullname + ",g_north,y_480,x_-100,co_black/v1485750208/symposium_coa.png";
  $scope.certificateLink = $sce.trustAsResourceUrl(cert.src);
  $scope.certificate = cert.src;

  download.addEventListener("click", function() {
    var pdf = new jsPDF('l', 'mm'); // l => landscape
    pdf.addImage(cert, 'PNG', 0, 0, 297, 210); // Refer to https://github.com/MrRio/jsPDF/issues/434 for documentation on this method
    var filename = sessionStorage.fullname.replace(/["']/g, "") + ".pdf";
    pdf.save(filename);
  }, function(error){
    $log.log("error: ", error);
  });

}]);
