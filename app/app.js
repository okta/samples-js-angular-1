import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';

export function bootstrap(config) {
  const containerEl = document.querySelector(config.container);
  angular.element(containerEl).html('<app></app>');

  const app = angular
    .module('app', [Components, uiRouter])
    .constant('config', config)
    .component('app', AppComponent)
    .config(($urlRouterProvider, $locationProvider) => {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    })
    .name;

  angular.bootstrap(document, [app]);
}

export default bootstrap;
