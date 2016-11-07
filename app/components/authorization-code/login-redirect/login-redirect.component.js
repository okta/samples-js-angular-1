import Controller from './login-redirect.controller';

const LoginRedirectComponent = {
  controller: Controller,
  template: `
    <a href="" ng-click="$ctrl.login()" data-se="login-link">Login with Okta</a>
  `,
};

export default LoginRedirectComponent;
