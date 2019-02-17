import { async, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {DeviceApiService} from '../../device/services/device-api.service';
import {Observable} from 'rxjs/internal/Observable';

describe('MapComponent', () => {
  let component: MapComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [ LeafletModule ],
      providers: [ { provide: DeviceApiService, useValue: jasmine.createSpyObj(['getDevices'])} ]
    });
    const fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    const deviceApiService = TestBed.get(DeviceApiService);
    deviceApiService.getDevices.and.returnValue(new Observable());
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
