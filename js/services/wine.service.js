let WineService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/wine';

  let checkAuth = function () {
    return true;
  };

  this.getWines = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getWine = function (wineId) {
    if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + wineId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let Wine = function (obj) {
    this.name = obj.name;
    this.maker = obj.maker;
    this.photo = obj.photo;
    this.info = obj.info;
  };

  this.addWine = function (obj) {
    let w = new Wine(obj);
    return $http.post(url, w, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };


};

WineService.$inject = ['$http', 'PARSE'];

export default WineService;