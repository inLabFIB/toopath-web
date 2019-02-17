import { async, TestBed } from '@angular/core/testing';

import { EditTrackComponent } from './edit-track.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TrackApiService} from '../services/track-api.service';
import {FormsModule} from '@angular/forms';

describe('EditTrackComponent', () => {
  let component: EditTrackComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrackComponent ],
      imports: [ RouterTestingModule, FormsModule ],
      providers: [ { provide: TrackApiService, useValue: jasmine.createSpy('TrackApiService') } ]
    });
    const fixture = TestBed.createComponent(EditTrackComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
