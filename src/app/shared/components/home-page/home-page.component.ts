import { Component, OnInit } from '@angular/core';
import {AuthUserService} from '../../../auth/services/auth-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isLogged: boolean;

  constructor(private _authUserService: AuthUserService) { }

  ngOnInit() {
    this._authUserService.isLogged$.subscribe(async isLogged => {
      this.isLogged = isLogged;
    });
  }

}
