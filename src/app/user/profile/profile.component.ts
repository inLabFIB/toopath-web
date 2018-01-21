import {Component, OnInit} from '@angular/core';
import {AuthUserService} from '../../auth/services/auth-user.service';
import {User} from '../../objects/user';
import {UserApiService} from '../services/user-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(private _authUserService: AuthUserService) {
  }

  ngOnInit() {
    this.currentUser = this._authUserService.getCurrentUser();
  }
}
