import { TestBed, async } from '@angular/core/testing';
import {Component} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-navbar',
  template: ''
})
class NavbarComponentMockComponent {
}

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponentMockComponent
      ],
      imports: [RouterTestingModule]
    });
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
