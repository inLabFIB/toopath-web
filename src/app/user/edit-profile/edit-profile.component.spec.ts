import { async, TestBed } from '@angular/core/testing';

import { EditProfileComponent } from './edit-profile.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthUserService} from '../../auth/services/auth-user.service';
import {UserApiService} from '../services/user-api.service';
import {Observable} from 'rxjs/internal/Observable';
import {FormsModule} from '@angular/forms';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileComponent ],
      imports: [ RouterTestingModule, FormsModule ],
      providers: [
        { provide: AuthUserService, useValue: jasmine.createSpyObj(['getCurrentUser']) },
        { provide: UserApiService, useValue: jasmine.createSpyObj(['putUser']) },
      ]

    });
    const fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    const userApiService = TestBed.get(UserApiService);
    userApiService.putUser.and.returnValue(new Observable());
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
