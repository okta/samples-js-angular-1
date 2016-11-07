import OktaAuth from '@okta/okta-auth-js/jquery';

class ProfileController {

  constructor(config) {
    this.user = config.user;
  }

  $onInit() {
    this.email = this.user.email;
    this.iat = this.user.iat;
    this.iatFormatted = new Date(this.user.iat * 1000);
    this.exp = this.user.exp;
    this.expFormatted = new Date(this.user.exp * 1000);
    this.authClient = new OktaAuth({ url: 'http://127.0.0.1:7777' });
  }

  logout() {
    this.authClient.session.close().then(() => {
      window.location = '/authorization-code/logout';
    });
  }

}

export default ProfileController;
