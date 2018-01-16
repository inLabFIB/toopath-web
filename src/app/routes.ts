import {AppSignUpComponent} from './auth/sign-up/sign-up.component';
import {AppLogInComponent} from './auth/log-in/log-in.component';
import {AppMyDevicesComponent} from './device/my-devices/my-devices.component';
import {Routes} from '@angular/router';
import {AuthUserService} from './auth/services/auth-user.service';
import {NewDeviceComponent} from "./device/new-device/new-device.component";

export const appRoutes: Routes = [
  {path: 'signUp', component: AppSignUpComponent},
  {path: 'logIn', component: AppLogInComponent},
  {path: 'myDevices', component: AppMyDevicesComponent, canActivate: [AuthUserService]},
  {path: 'newDevice', component: NewDeviceComponent, canActivate: [AuthUserService]}
];
