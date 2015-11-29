import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

import config from './config';

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';
import EditController from './controllers/edit.controller';
import HomeController from './controllers/home.controller';

import WineService from './services/wine.service';




angular
  .module('app', ['ui.router', 'mm.foundation'])
  .constant ('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'jJJqwe4sP0yZ73PZnVky2ceSTV9p1b5TSQzdubgt',
        'X-Parse-REST-API-KEY': '8SVr0kSmMBWKfpbyWjGvnVkiQ66gsYQqJ6kGqvrH'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .service('WineService', WineService)
;
