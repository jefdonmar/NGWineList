let ListController = function($scope, WineService) {

  WineService.getWines().then ( (res) => {
    $scope.wines = res.data.results;
  });

};
ListController.$inject = ['$scope', 'WineService'];
export default ListController;