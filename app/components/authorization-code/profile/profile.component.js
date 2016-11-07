import Controller from './profile.controller';

const ProfileComponent = {
  controller: Controller,
  template: `
    <p>
      <strong data-se="email">{{$ctrl.email}}</strong> is logged in!<br />
      {{$ctrl.iat}} - {{$ctrl.iatFormatted}}<br />
      {{$ctrl.exp}} - {{$ctrl.expFormatted}}<br />
    </p>
    <p>
      <a ng-click="$ctrl.logout()" data-se="logout-link" href="">Logout</a>
    </p>
  `,
};

export default ProfileComponent;
