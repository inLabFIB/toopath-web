import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackLocationComponent } from './add-track-location.component';

describe('AddTrackLocationComponent', () => {
  let component: AddTrackLocationComponent;
  let fixture: ComponentFixture<AddTrackLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrackLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
