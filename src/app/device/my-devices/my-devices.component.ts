import {Component, OnInit} from '@angular/core';
import {DeviceApiService} from "../services/device-api.service";
import {Device} from "../../objects/device";

@Component({
  selector: 'app-app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.css']
})
export class AppMyDevicesComponent implements OnInit {

  devices: Device[];

  constructor(private _deviceApiService: DeviceApiService) {
  }

  ngOnInit() {
    this._deviceApiService.getDevices(this.devices);
  }
}
