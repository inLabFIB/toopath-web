import {async, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

import {HomePageComponent} from './home-page.component';
import {AuthUserService} from '../../../auth/services/auth-user.service';

class AuthUserServiceMock {
  isLogged$: Observable<boolean>;

  constructor() {
    this.isLogged$ = new BehaviorSubject<boolean>(true).asObservable();
  }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        {provide: AuthUserService, AuthUserServiceMock}
      ]
    });
    const fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
