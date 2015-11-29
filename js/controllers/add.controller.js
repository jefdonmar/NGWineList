let AddController = function($scope, WineService) {

  $scope.addWine = (obj) => {
    WineService.addWine(obj).then( (res) => {
      $scope.wine = {};
    });
  };

};
AddController.$inject = ['$scope', 'WineService'];
export default AddController;