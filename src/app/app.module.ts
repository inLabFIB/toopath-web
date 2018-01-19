import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppNavbarComponent} from './shared/components/navbar/navbar.component';
import {AppSignUpComponent} from './auth/sign-up/sign-up.component';
import {AppLogInComponent} from './auth/log-in/log-in.component';
import {AppMyDevicesComponent} from './device/my-devices/my-devices.component';
import {AuthUserService} from './auth/services/auth-user.service';
import {appRoutes} from './routes';
import {NewDeviceComponent} from './device/new-device/new-device.component';
import {DeviceApiService} from "./device/services/device-api.service";
import {AuthInterceptor} from "./shared/interceptors/auth-interceptor";
import { MyTracksComponent } from './track/my-tracks/my-tracks.component';
import { NewTrackComponent } from './track/new-track/new-track.component';
import {TrackApiService} from "./track/services/track-api.service";
import { EditDeviceComponent } from './device/edit-device/edit-device.component';
import { EditTrackComponent } from './track/edit-track/edit-track.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSignUpComponent,
    AppLogInComponent,
    AppMyDevicesComponent,
    NewDeviceComponent,
    MyTracksComponent,
    NewTrackComponent,
    EditDeviceComponent,
    EditTrackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthUserService,
    DeviceApiService,
    TrackApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
