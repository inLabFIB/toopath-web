import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({headers: req.headers.set('Authorization', 'JWT ' + environment.token)});
    return next.handle(authReq);
  }
}
