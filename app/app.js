/* eslint no-console:0 */
import renderScenarios from './scenarios';
import renderProfile from './profile';
import renderLoginRedirectOkta from './login-redirect';
import renderLoginCustom from './login-custom';

export function bootstrap(config) {
  switch (window.location.pathname) {
    case '/':
      renderScenarios(config);
      break;
    case '/authorization-code/profile':
      renderProfile(config);
      break;
    case '/authorization-code/login-redirect':
      renderLoginRedirectOkta(config);
      break;
    case '/authorization-code/login-custom':
      renderLoginCustom(config);
      break;
    default:
      break;
  }
}

export default bootstrap;
