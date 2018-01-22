import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../objects/user';
import {Router} from '@angular/router';
import {AuthUserService} from '../services/auth-user.service';
import {GoogleSignInComponent, GoogleSignInSuccess} from 'angular-google-signin';

@Component({
  selector: 'app-app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class AppLogInComponent implements OnInit {

  @ViewChild('logInButton', {read: ElementRef}) logInButton: ElementRef;
  user: User;
  googleWidth: number;
  private myClientId: string = '349015628188-7bpejun8mdc78d5chh7gk92u8dmttjl7.apps.googleusercontent.com';

  constructor(private _authUserService: AuthUserService, private _router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    this.googleWidth = this.logInButton.nativeElement.offsetWidth;
  }

  async sendLogIn() {
    await this._authUserService.postLogin(this.user);
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let token: string = googleUser.getAuthResponse().id_token;
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    this._authUserService.postGoogleLogIn(token, profile.getEmail(), profile.getName());
  }
}
