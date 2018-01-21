import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOnMapComponent } from './track-on-map.component';

describe('TrackOnMapComponent', () => {
  let component: TrackOnMapComponent;
  let fixture: ComponentFixture<TrackOnMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackOnMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
