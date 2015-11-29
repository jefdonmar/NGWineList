let EditController = function($scope, $stateParams, $state, WineService) {
  
  WineService.getWine($stateParams.wineId).then( (res) => {
    $scope.singleWine = res.data;
  });

  $scope.updateWine = function (obj) {
    WineService.update(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');

    });
  };
  

};

EditController.$inject = ['$scope', '$stateParams', '$state', 'WineService'];
export default EditController;