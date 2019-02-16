import { async, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { NewTrackComponent } from './new-track.component';
import {TrackApiService} from '../services/track-api.service';

describe('NewTrackComponent', () => {
  let component: NewTrackComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrackComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ { provide: TrackApiService, useValue: jasmine.createSpy('TrackApiService') } ]
    });
    const fixture = TestBed.createComponent(NewTrackComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
