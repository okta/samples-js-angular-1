/**
 * TODO:
 * x Pass config to app so that it can trickle down?
 * x Is it possible to not include <app></app> on the page?
 *   x else we need to be able to pass per type template...
 * x Update webpack to actually bundle as bundle.js, and have main file be
 *   called app in base stuff
 * x Rename "app" to "profile" in base stuff
 * x Rename "start" to "bootstrap"
 * x Add user info to template
 *
 * - Copy changes to generator
 * - Get mock-okta working...?
 * - Get selenium tests working
 *
 * TODO ON GENERATOR:
 * - Rename "app" to "profile" in app
 * - Rename webpack "app" to "bundle"
 * - Rename app.start to bundle.bootstrap
 */

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
