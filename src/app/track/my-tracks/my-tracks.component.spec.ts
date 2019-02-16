import { async, TestBed } from '@angular/core/testing';

import { MyTracksComponent } from './my-tracks.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TrackApiService} from '../services/track-api.service';

describe('MyTracksComponent', () => {
  let component: MyTracksComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTracksComponent],
      imports: [RouterTestingModule],
      providers: [{provide: TrackApiService, useValue: jasmine.createSpy('TrackApiService')}]
    });
    const fixture = TestBed.createComponent(MyTracksComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
