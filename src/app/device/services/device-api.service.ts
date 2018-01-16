import {Injectable} from '@angular/core';
import {Device} from "../../objects/device";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {GetDevices} from "../../shared/interfaces/device.interface";

const DEVICE_URL = 'devices/';

@Injectable()
export class DeviceApiService {
  constructor(private http: HttpClient, private _router: Router) {
  }

  postDevice(device: Device) {
    this.http.post(environment.apiUrl + DEVICE_URL, device).subscribe(
      success => {
        this._router.navigate(['/myDevices']);
      },
      err => {
        console.log(err);
      });
  }

  getDevices(devices: Device[]) {
    this.http.get<GetDevices>(environment.apiUrl + DEVICE_URL).subscribe(
      data => {
        console.log(data.devices[0]);
      },
      err => {
        console.log(err);
      }
    )
  }
}
