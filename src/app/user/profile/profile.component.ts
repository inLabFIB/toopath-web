import {Component, OnInit} from '@angular/core';
import {AuthUserService} from '../../auth/services/auth-user.service';
import {User} from '../../objects/user';

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
