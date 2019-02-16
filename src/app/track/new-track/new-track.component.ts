import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Track} from '../../objects/track';
import {TrackApiService} from '../services/track-api.service';

@Component({
  selector: 'app-new-track',
  templateUrl: './new-track.component.html',
  styleUrls: ['./new-track.component.css']
})
export class NewTrackComponent implements OnInit {

  track: Track;
  deviceId: number;

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute, private _trackApiService: TrackApiService) {
  }

  ngOnInit() {
    this.track = new Track();
    this._activatedRoute.params.subscribe(async params => {
      this.deviceId = params['deviceId'];
    });
  }

  sendPostTrack() {
    this._trackApiService.postTrack(this.track, this.deviceId).subscribe(
      succes => {
        this._route.navigate(['/devices/' + this.deviceId + '/tracks/']);
      }, error => {
        console.log(error);
      });
  }

}
