import { async, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

import { AddTrackLocationComponent } from './add-track-location.component';
import {TrackLocationApiService} from '../services/track-location-api.service';

describe('AddTrackLocationComponent', () => {
  let component: AddTrackLocationComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrackLocationComponent ],
      imports: [ RouterTestingModule, FormsModule ],
      providers: [ { provide: TrackLocationApiService, useValue: jasmine.createSpy('TrackLocationApiService') } ]
    });
    const fixture = TestBed.createComponent(AddTrackLocationComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
