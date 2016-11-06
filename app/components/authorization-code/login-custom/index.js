import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginCustomComponent from './login-custom.component';

const loginCustom = angular
  .module('authorizationCode.loginCustom', [uiRouter])
  .component('loginCustom', LoginCustomComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('authorization-code/login-custom', {
        url: '/authorization-code/login-custom',
        component: 'loginCustom',
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default loginCustom;
