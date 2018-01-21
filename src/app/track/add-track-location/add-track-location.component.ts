import {Component, OnInit} from '@angular/core';
import {TrackLocation} from '../../objects/location';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackLocationApiService} from '../services/track-location-api.service';

@Component({
  selector: 'app-add-track-location',
  templateUrl: './add-track-location.component.html',
  styleUrls: ['./add-track-location.component.css']
})
export class AddTrackLocationComponent implements OnInit {

  location: TrackLocation;
  deviceId: number;
  trackId: number;

  constructor(private _activatedRoute: ActivatedRoute, private _trackLocationApiService: TrackLocationApiService, private _router: Router) {
  }

  ngOnInit() {
    this.location = new TrackLocation();
    this._activatedRoute.params.subscribe(async params => {
      this.deviceId = params['deviceId'];
      this.trackId = params['trackId'];
    });
  }

  sendPostTrackLocation() {
    this._trackLocationApiService.postTrackLocation(this.location, this.trackId, this.deviceId).subscribe(
      result => {
        this._router.navigate(['/devices/' + this.deviceId + '/tracks']);
      }, error => {
        console.log(error);
      }
    );
  }

}
