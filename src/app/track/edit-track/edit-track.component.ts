import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Track} from '../../objects/track';
import {TrackApiService} from '../services/track-api.service';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.css']
})
export class EditTrackComponent implements OnInit {

  track: Track;
  deviceId: number;

  constructor(private _activatedRoute: ActivatedRoute, private _trackApiService: TrackApiService, private _router: Router) {
  }

  ngOnInit() {
    this.track = new Track();
    this._activatedRoute.params.subscribe(async params => {
      this.deviceId = params['deviceId'];
      this._trackApiService.getTrack(this.deviceId, params['trackId']).subscribe(
        result => {
          this.track = <Track>result;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  sendPutTrack() {
    this._trackApiService.putTrack(this.track, this.deviceId).subscribe(
      result => {
        this._router.navigate(['/devices/' + this.deviceId + '/tracks']);
      },
      error => {
        console.log(error);
      });
  }

}
