let SingleController = function($scope, $stateParams, WineService, $state) {
  
  $scope.rate = 7;

  WineService.getWine($stateParams.wineId).then( (res) => {
    $scope.singleWine = res.data;
  });

  $scope.deleteMe = function (obj) {
    WineService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };


};
SingleController.$inject = ['$scope', '$stateParams', 'WineService', '$state'];
export default SingleController;