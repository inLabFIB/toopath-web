import { async, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { EditDeviceComponent } from './edit-device.component';
import {DeviceApiService} from '../services/device-api.service';

describe('EditDeviceComponent', () => {
  let component: EditDeviceComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeviceComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [{ provide: DeviceApiService, useValue: jasmine.createSpy('DeviceApiService') } ],
    });
    const fixture = TestBed.createComponent(EditDeviceComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
