import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {User} from '../../objects/user';
import {AuthUserService} from '../services/auth-user.service';

@Component({
  selector: 'app-app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class AppLogInComponent implements OnInit {

  @ViewChild('logInButton', {read: ElementRef}) logInButton: ElementRef;
  user: User;

  constructor(private _authUserService: AuthUserService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  async sendLogIn() {
    await this._authUserService.postLogin(this.user);
  }
}
