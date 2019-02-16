import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Device} from '../../objects/device';
import {DeviceApiService} from '../services/device-api.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  device: Device;

  constructor(private _deviceApiService: DeviceApiService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.device = new Device();
    this._activatedRoute.params.subscribe(async params => {
      this._deviceApiService.getDevice(params['deviceId']).subscribe(
        result => {
          this.device = <Device>result;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  sendPutDevice() {
    this._deviceApiService.putDevice(this.device).subscribe(
      result => {
        this._router.navigate(['/devices']);
      },
      error => {
        console.log(error);
      });
  }
}
