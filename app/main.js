angular.module('leadgenius', ['leadgenius.search'])

.controller('mainCtrl', function($scope, Search) {
  $scope.searchUrl = function() {
    var url = $scope.url;
    Search.searchUrl(url);
  };
});
