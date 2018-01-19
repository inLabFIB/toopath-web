import {Injectable} from '@angular/core';
import {User} from '../../objects/user';
import {CanActivate, Router} from '@angular/router';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PostLogin} from "../../shared/interfaces/log-in.interface";

@Injectable()
export class AuthUserService implements CanActivate {

  private isLoggedSource: BehaviorSubject<boolean>;
  isLogged$: Observable<boolean>;

  constructor(private http: HttpClient, private _router: Router) {
    let isLogged = this.isAuthenticated();
    this.isLoggedSource = new BehaviorSubject<boolean>(isLogged);
    this.isLogged$ = this.isLoggedSource.asObservable();
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    }
    this._router.navigate(['logIn']);
    return false;
  }

  isAuthenticated() {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private setToken(token: string) {
    environment.token = token;
  }

  private announceIsLogged() {
    let isLogged = this.isAuthenticated();
    this.isLoggedSource.next(isLogged);
  }

  async postLogin(user: User) {
    this.http.post<PostLogin>(environment.apiUrl + 'login/', user).subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify({
          id: data.user.id,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          username: data.user.username
        }));
        this.setToken(data.token);
        this.announceIsLogged();
        this._router.navigate(['/devices']);
      },
      err => {
        console.log(err.status);
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.setToken(null);
    this.announceIsLogged();
  }
}
