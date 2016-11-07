import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProfileComponent from './profile.component';

const profile = angular
  .module('authorizationCode.profile', [uiRouter])
  .component('profile', ProfileComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('authorization-code/profile', {
        url: '/authorization-code/profile',
        component: 'profile',
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default profile;
