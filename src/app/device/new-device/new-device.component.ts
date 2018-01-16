import {Component, OnInit} from '@angular/core';
import {Device} from "../../objects/device";
import {DeviceApiService} from "../services/device-api.service";

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  device: Device;

  constructor(private _deviceApiService: DeviceApiService) {
  }

  ngOnInit() {
    this.device = new Device();
  }

  async sendPostDevice() {
    await this._deviceApiService.postDevice(this.device);
  }

}
