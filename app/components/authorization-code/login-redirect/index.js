import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginRedirectComponent from './login-redirect.component';

const loginRedirect = angular
  .module('authorizationCode.loginRedirect', [uiRouter])
  .component('loginRedirect', LoginRedirectComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('authorization-code/login-redirect', {
        url: '/authorization-code/login-redirect',
        component: 'loginRedirect',
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default loginRedirect;
