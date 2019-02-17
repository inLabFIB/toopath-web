import { async, TestBed } from '@angular/core/testing';

import { AppSignUpComponent } from './sign-up.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('AppSignUpComponent', () => {
  let component: AppSignUpComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSignUpComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpClientModule ],
    });
    const fixture = TestBed.createComponent(AppSignUpComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
