import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

interface PostLogin {
  user: {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
  };
  token: string;
}

@Component({
  selector: 'app-app-log-in',
  templateUrl: './app-log-in.component.html',
  styleUrls: ['./app-log-in.component.css']
})
export class AppLogInComponent implements OnInit {

  user: User;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.user = new User();
  }

  sendLogIn() {
    this.http.post<PostLogin>(environment.apiUrl + 'login/', this.user).subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify({
          id: data.user.id,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          username: data.user.username,
          token: data.token
        }));
        this.router.navigate(['']);
      },
      err => {
        console.log(err.status);
      });
  }
}
