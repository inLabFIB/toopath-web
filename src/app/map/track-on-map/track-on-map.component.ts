import {Component, OnInit} from '@angular/core';
import {latLng, point, polyline, tileLayer} from 'leaflet';
import {Track} from '../../objects/track';
import {ActivatedRoute} from '@angular/router';
import {TrackApiService} from '../../track/services/track-api.service';
import {Map} from 'leaflet';

@Component({
  selector: 'app-track-on-map',
  templateUrl: './track-on-map.component.html',
  styleUrls: ['./track-on-map.component.css']
})
export class TrackOnMapComponent implements OnInit {

  deviceId: number;
  trackId: number;
  track: Track;
  trackName: string;
  route = polyline([]);
  osm = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  options = {
    layers: [this.osm, this.route],
    zoom: 17,
    center: latLng(41.389400, 2.113399)
  };


  constructor(private _activatedRoute: ActivatedRoute, private _trackApiService: TrackApiService) {
  }

  ngOnInit() {
    this.trackName = localStorage.getItem('currentTrackName');
    this._activatedRoute.params.subscribe(async params => {
      this.deviceId = params['deviceId'];
      this.trackId = params['trackId'];
    });
  }

  onMapReady(map: Map) {
    this._trackApiService.getTrack(this.deviceId, this.trackId).subscribe(
      result => {
        this.track = <Track>result;
        for (let feature of result.locations.features) {
          this.route.addLatLng(feature.geometry.coordinates);
        }
        map.fitBounds(this.route.getBounds(), {
          padding: point(24, 24),
          animate: true
        });
      },
      error => {
        console.log(error);
      });
  }
}
