/* eslint no-console:0 */
import renderScenarios from './scenarios';
import renderAppCode from './app-code';
import renderLoginRedirectOkta from './login-redirect';
import renderLoginCustom from './login-custom';

export function start(config) {
  switch (window.location.pathname) {
    case '/':
      renderScenarios(config);
      break;
    case '/authorization-code/app':
      renderAppCode(config);
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

export default start;
