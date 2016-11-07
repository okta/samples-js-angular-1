import angular from 'angular';
import Scenarios from './scenarios';
import AuthorizationCode from './authorization-code';

const components = angular
  .module('components', [Scenarios, AuthorizationCode])
  .name;

export default components;
