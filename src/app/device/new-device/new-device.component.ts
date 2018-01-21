import {Component, OnInit} from '@angular/core';
import {Device} from "../../objects/device";
import {DeviceApiService} from "../services/device-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  device: Device;

  constructor(private _deviceApiService: DeviceApiService, private _router: Router) {
  }

  ngOnInit() {
    this.device = new Device();
  }

  sendPostDevice() {
    this._deviceApiService.postDevice(this.device).subscribe(
      success => {
        this._router.navigate(['/devices']);
      }, error => {
        console.log(error);
      }
    );
  }

}
