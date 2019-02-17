import { async, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import { AppLogInComponent } from './log-in.component';
import {AuthUserService} from '../services/auth-user.service';

describe('AppLogInComponent', () => {
  let component: AppLogInComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogInComponent ],
      imports: [ FormsModule ],
      providers: [{ provide: AuthUserService, useValue: jasmine.createSpy() } ],
    });
    const fixture = TestBed.createComponent(AppLogInComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
