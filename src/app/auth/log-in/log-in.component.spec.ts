import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogInComponent } from './log-in.component';

describe('AppLogInComponent', () => {
  let component: AppLogInComponent;
  let fixture: ComponentFixture<AppLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
