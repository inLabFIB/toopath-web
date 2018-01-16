import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted request ... ");
    const authReq = req.clone({headers: req.headers.set("Authorization", "JWT " + environment.token)});
    console.log("Sending request with token " + environment.token);
    return next.handle(authReq);
  }
}
