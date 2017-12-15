import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyDevicesComponent } from './app-my-devices.component';

describe('AppMyDevicesComponent', () => {
  let component: AppMyDevicesComponent;
  let fixture: ComponentFixture<AppMyDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMyDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
