import { async, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {AuthUserService} from '../../auth/services/auth-user.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [ { provide: AuthUserService, useValue: jasmine.createSpyObj(['getCurrentUser']) } ]
    });
    const fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
