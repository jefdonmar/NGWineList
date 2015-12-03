let AddController = function($scope, $state, $stateParams, WineService) {

  $scope.addWine = (obj) => {
    WineService.addWine(obj).then( (res) => {
      $scope.wine = {};
      $state.go('root.list');
    });
  };

};
AddController.$inject = ['$scope', '$state', '$stateParams', 'WineService'];
export default AddController;