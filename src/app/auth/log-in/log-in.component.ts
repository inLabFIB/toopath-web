import {Component, OnInit} from '@angular/core';
import {User} from '../../objects/user';
import {Router} from '@angular/router';
import {AuthUserService} from '../services/auth-user.service';

@Component({
  selector: 'app-app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class AppLogInComponent implements OnInit {

  user: User;

  constructor(private _logInService: AuthUserService, private _router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  async sendLogIn() {
    await this._logInService.postLogin(this.user);
  }
}
