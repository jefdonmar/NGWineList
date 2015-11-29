let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.list', {
      url: '/list',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.single', {
      url: '/single/:wineId',      
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html' 
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:wineId',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;