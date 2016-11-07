import angular from 'angular';
import LoginRedirect from './login-redirect';
import LoginCustom from './login-custom';
import Profile from './profile';

const authorizationCode = angular
  .module('authorizationCode', [LoginRedirect, LoginCustom, Profile])
  .name;

export default authorizationCode;
