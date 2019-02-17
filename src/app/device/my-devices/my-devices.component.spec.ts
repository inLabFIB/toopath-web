import { async, TestBed } from '@angular/core/testing';

import { AppMyDevicesComponent } from './my-devices.component';
import {DeviceApiService} from '../services/device-api.service';
import {Observable} from 'rxjs/internal/Observable';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppMyDevicesComponent', () => {
  let component: AppMyDevicesComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyDevicesComponent ],
      imports: [ RouterTestingModule ],
      providers: [{ provide: DeviceApiService, useValue: jasmine.createSpyObj(['getDevices']) } ],
    });
    const fixture = TestBed.createComponent(AppMyDevicesComponent);
    component = fixture.componentInstance;
    const deviceApiService = TestBed.get(DeviceApiService);
    deviceApiService.getDevices.and.returnValue(new Observable());
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
