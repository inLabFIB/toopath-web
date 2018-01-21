import {Component, OnInit} from '@angular/core';
import {latLng, Map, polyline, tileLayer} from 'leaflet';
import {Track} from '../../objects/track';
import {DeviceApiService} from '../../device/services/device-api.service';
import {COLORS} from '../../shared/constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  osm = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  layersControl = {
    baseLayers: {
      'Open Street Map': this.osm
    }, overlays: {}
  };
  options = {
    layers: [this.osm],
    zoom: 14,
    center: latLng(41.389400, 2.113399)
  };
  noTracks: boolean = true;
  devices: any;

  constructor(private _deviceApiService: DeviceApiService) {
  }

  ngOnInit() {
    this._deviceApiService.getDevices().subscribe(
      result => {
        if (result.length > 0) this.noTracks = false;
        this.devices = result;
      }, error => {
        console.log(error);
      });
  }

  onMapReady(map: Map) {
    let color_number = 1;
    for (let device of this.devices) {
      color_number += 1;
      for (let track of device.tracks) {
        let route = polyline([]);
        route.options.color = COLORS[color_number];
        for (let feature of track.locations.features) {
          route.addLatLng(feature.geometry.coordinates);
        }
        this.layersControl.overlays[device.name + ' - ' + track.name] = route;
      }
    }
  }
}
