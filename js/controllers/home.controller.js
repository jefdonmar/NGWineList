let HomeController = function ($scope) {

  $scope.title = 'Home Page From Controller';

  $scope.aboutText = 'I am some about text';

  $scope.contactText = 'I am some contact text';

};

HomeController.$inject = ['$scope'];

export default HomeController;