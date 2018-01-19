import {AppSignUpComponent} from './auth/sign-up/sign-up.component';
import {AppLogInComponent} from './auth/log-in/log-in.component';
import {AppMyDevicesComponent} from './device/my-devices/my-devices.component';
import {Routes} from '@angular/router';
import {AuthUserService} from './auth/services/auth-user.service';
import {NewDeviceComponent} from "./device/new-device/new-device.component";
import {MyTracksComponent} from "./track/my-tracks/my-tracks.component";
import {NewTrackComponent} from "./track/new-track/new-track.component";
import {EditDeviceComponent} from "./device/edit-device/edit-device.component";
import {EditTrackComponent} from "./track/edit-track/edit-track.component";

export const appRoutes: Routes = [
  {path: 'signUp', component: AppSignUpComponent},
  {path: 'logIn', component: AppLogInComponent},
  {path: 'devices', component: AppMyDevicesComponent, canActivate: [AuthUserService]},
  {path: 'devices/add', component: NewDeviceComponent, canActivate: [AuthUserService]},
  {path: 'devices/:deviceId/tracks', component: MyTracksComponent, canActivate: [AuthUserService]},
  {path: 'devices/:deviceId/edit', component: EditDeviceComponent, canActivate: [AuthUserService]},
  {path: 'devices/:deviceId/tracks/add', component: NewTrackComponent, canActivate: [AuthUserService]},
  {path: 'devices/:deviceId/tracks/:trackId/edit', component: EditTrackComponent, canActivate: [AuthUserService]}
];
