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

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSignUpComponent,
    AppLogInComponent,
    AppMyDevicesComponent,
    NewDeviceComponent
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
    DeviceApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
