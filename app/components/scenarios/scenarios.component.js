const ScenariosComponent = {
  template: `
    <ul data-se="scenarios">
      <li>
        <a ui-sref="authorization-code/login-redirect" data-se="auth-code-login-redirect">Authorization Code: Login with Okta</a>
      </li>
      <li>
        <a ui-sref="authorization-code/login-custom" data-se="auth-code-login-custom">Authorization Code: Login using a custom login form</a>
      </li>
    </ul>
  `,
};

export default ScenariosComponent;
