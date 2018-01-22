import {Injectable} from '@angular/core';
import {User} from '../../objects/user';
import {CanActivate, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PostLogin} from '../../shared/interfaces/log-in.interface';

@Injectable()
export class AuthUserService implements CanActivate {

  private isLoggedSource: BehaviorSubject<boolean>;
  private googleLogged: boolean;
  isLogged$: Observable<boolean>;

  constructor(private _http: HttpClient, private _router: Router) {
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

  private setUserToLocalStorage(data: any) {
    localStorage.setItem('currentUser', JSON.stringify({
      id: data.user.id,
      email: data.user.email,
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      username: data.user.username
    }));
    this.setToken(data.token);
    this.announceIsLogged();
  }

  private googleLogOut() {
    this.googleLogged = false;
    let gauth2 = gapi.auth2.getAuthInstance();
    gauth2.signOut().then();
  }

  async postLogin(user: User) {
    this._http.post<PostLogin>(environment.apiUrl + 'login/', user).subscribe(
      result => {
        this.setUserToLocalStorage(result);
        this._router.navigate(['/devices']);
      },
      err => {
        console.log(err.status);
      });
  }

  async postGoogleLogIn(token: string, email: string, name: string) {
    let body = {
      'google_token': token,
      'email': email,
      'name': name
    };
    this._http.post<PostLogin>(environment.apiUrl + 'login-google/', body).subscribe(
      result => {
        this.googleLogged = true;
        this.setUserToLocalStorage(result);
        this._router.navigate(['/devices']);
      }, error => {
        console.log(error);
      }
    );
  }

  async logout() {
    if (this.googleLogged) {
      await this.googleLogOut();
    }
    localStorage.removeItem('currentUser');
    this.setToken(null);
    this.announceIsLogged();
    this._router.navigate(['']);
  }
}
