import { async, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { TrackOnMapComponent } from './track-on-map.component';
import {TrackApiService} from '../../track/services/track-api.service';

describe('TrackOnMapComponent', () => {
  let component: TrackOnMapComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackOnMapComponent ],
      imports: [ RouterTestingModule, LeafletModule ],
      providers: [ { provide: TrackApiService, useValue: jasmine.createSpy('TrackApiService') } ]
    });
    const fixture = TestBed.createComponent(TrackOnMapComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
