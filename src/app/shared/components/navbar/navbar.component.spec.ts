import {async, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

import {AppNavbarComponent} from './navbar.component';
import {AuthUserService} from '../../../auth/services/auth-user.service';

class AuthUserServiceMock {
  isLogged$: Observable<boolean>;

  constructor() {
    this.isLogged$ = new BehaviorSubject<boolean>(true).asObservable();
  }
}

describe('AppNavbarComponent', () => {
  let component: AppNavbarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarComponent ],
      providers: [
        {provide: AuthUserService, AuthUserServiceMock}
      ]
    });
    const fixture = TestBed.createComponent(AppNavbarComponent);
    component = fixture.debugElement.componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
