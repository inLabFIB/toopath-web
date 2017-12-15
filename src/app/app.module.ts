import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {AppSignUpComponent} from './app-sign-up/app-sign-up.component';
import {AppLogInComponent} from './app-log-in/app-log-in.component';
import {AppMyDevicesComponent} from './app-my-devices/app-my-devices.component';

const appRoutes: Routes = [
  {path: 'signUp', component: AppSignUpComponent},
  {path: 'logIn', component: AppLogInComponent},
  {path: 'myDevices', component: AppMyDevicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSignUpComponent,
    AppLogInComponent,
    AppMyDevicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
