import { async, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/internal/Observable';

import { NewDeviceComponent } from './new-device.component';
import {DeviceApiService} from '../services/device-api.service';

describe('NewDeviceComponent', () => {
  let component: NewDeviceComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [{ provide: DeviceApiService, useValue: jasmine.createSpyObj(['postDevice']) } ],
  });
    const fixture = TestBed.createComponent(NewDeviceComponent);
    component = fixture.componentInstance;
    const deviceApiService = TestBed.get(DeviceApiService);
    deviceApiService.postDevice.and.returnValue(new Observable());
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
