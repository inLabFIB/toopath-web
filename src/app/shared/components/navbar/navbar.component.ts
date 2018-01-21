import {Component, OnInit} from '@angular/core';
import {AuthUserService} from '../../../auth/services/auth-user.service';
import {User} from '../../../objects/user';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: []
})
export class AppNavbarComponent implements OnInit {

  isLogged: boolean;
  currentUser: User;

  constructor(private _authUserService: AuthUserService) {
  }

  ngOnInit() {
    this._authUserService.isLogged$.subscribe(async isLogged => {
      if (isLogged) {
        this.currentUser = this._authUserService.getCurrentUser();
      }
      this.isLogged = isLogged;
    });
  }

  logOut() {
    this._authUserService.logout();
  }

}
