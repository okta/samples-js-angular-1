import OktaAuth from '@okta/okta-auth-js/jquery';
import template from './login-redirect.hbs';

export default function render(config) {
  const auth = new OktaAuth({
    url: config.oktaUrl,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    scopes: ['openid', 'email', 'profile'],
  });

  const container = document.querySelector(config.container);
  container.innerHTML = template();

  const link = document.getElementById('login');
  link.addEventListener('click', () => {
    auth.token.getWithRedirect({ responseType: 'code' });
  });
}
