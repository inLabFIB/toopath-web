import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../objects/user';
import {environment} from '../../../environments/environment';
import {USER_URL} from '../../shared/constants';

@Injectable()
export class UserApiService {

  constructor(private _http: HttpClient) {
  }

  putUser(user: User): Observable<any> {
    return this._http.put<User>(environment.apiUrl + USER_URL + user.id + '/', user);
  }

}
