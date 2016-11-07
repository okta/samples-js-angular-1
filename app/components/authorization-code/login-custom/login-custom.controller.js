import SignIn from '@okta/okta-signin-widget';

class LoginCustomController {

  constructor(config) {
    this.config = config;
  }

  $onInit() {
    const signIn = new SignIn({
      baseUrl: this.config.oktaUrl,
      clientId: this.config.clientId,
      redirectUri: this.config.redirectUri,
      authParams: {
        responseType: 'code',
        scopes: ['openid', 'email', 'profile'],
      },
    });
    signIn.renderEl({ el: '#sign-in-container' }, () => {});
  }

}

export default LoginCustomController;
