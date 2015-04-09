angular.module('leadgenius.search', [])

.factory('Search', function($http) {

  var searchUrl = function(url) {
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/url?url=' + url,
    };
    $http(req).success(function(data, status, headers, config) {
      var el = document.createElement('div');
      el.innerHTML = data;
      console.log(el);
    }).error(function(data, status, headers, config) {
      console.log('error');
    });
  };

  return {
    searchUrl: searchUrl
  };
});
