import {Component, OnInit} from '@angular/core';
import {AuthUserService} from '../../auth/services/auth-user.service';
import {User} from '../../objects/user';
import {UserApiService} from '../services/user-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser: User;

  constructor(private _authUserService: AuthUserService, private _userApiService: UserApiService, private _router: Router) {
  }

  ngOnInit() {
    this.currentUser = <User> this._authUserService.getCurrentUser();
    console.log(this.currentUser);
  }

  sendPutUser() {
    this._userApiService.putUser(this.currentUser).subscribe(
      result => {
        localStorage.setItem('currentUser', JSON.stringify({
          id: this.currentUser.id,
          email: result.email,
          first_name: result.first_name,
          last_name: result.last_name,
          username: result.username
        }));
        this._router.navigate(['/profile']);
      }, error => {
        console.log(error);
      });
  }
}
