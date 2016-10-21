import SignIn from '@okta/okta-signin-widget';

export default function render(config) {
  const signIn = new SignIn({
    baseUrl: config.oktaUrl,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    authParams: {
      responseType: 'code',
      scopes: ['openid', 'email', 'profile'],
    },
  });
  signIn.renderEl({ el: config.container }, () => {});
}
