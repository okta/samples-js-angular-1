import OktaAuth from '@okta/okta-auth-js/jquery';

class LoginRedirectController {

  constructor(config) {
    this.config = config;
  }

  $onInit() {
    this.authClient = new OktaAuth({
      url: this.config.oktaUrl,
      clientId: this.config.clientId,
      redirectUri: this.config.redirectUri,
      scopes: ['openid', 'email', 'profile'],
    });
  }

  login() {
    this.authClient.token.getWithRedirect({ responseType: 'code' });
  }

}

export default LoginRedirectController;
