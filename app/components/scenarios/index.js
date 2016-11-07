import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ScenariosComponent from './scenarios.component';

const scenarios = angular
  .module('scenarios', [uiRouter])
  .component('scenarios', ScenariosComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('scenarios', {
        url: '/',
        component: 'scenarios',
      });
    $urlRouterProvider.otherwise('/');
  })

  .name;

export default scenarios;
