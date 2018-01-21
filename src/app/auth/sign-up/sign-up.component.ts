import {Component, OnInit} from '@angular/core';
import {User} from '../../objects/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

interface PostUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class AppSignUpComponent implements OnInit {

  user: User;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.user = new User();
  }

  createUserAccount() {
    this.user.username = this.user.email.split('@')[0];
    this.http.post<PostUser>(environment.apiUrl + 'users/', this.user).subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify({
          email: data.email,
        }));
        this.router.navigate(['/logIn']);
      },
      err => {
        console.log(err.status);
      });
  }

}
