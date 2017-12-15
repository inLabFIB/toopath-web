import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-app-log-in',
  templateUrl: './app-log-in.component.html',
  styleUrls: ['./app-log-in.component.css']
})
export class AppLogInComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.user = new User();
  }

  sendLogIn() {
    this.http.post(environment.apiUrl + 'login/', this.user).subscribe();
  }
}
