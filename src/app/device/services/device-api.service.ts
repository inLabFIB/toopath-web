import {Injectable} from '@angular/core';
import {Device} from "../../objects/device";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {DEVICE_URL} from "../../shared/constants";

@Injectable()
export class DeviceApiService {
  constructor(private http: HttpClient) {
  }

  postDevice(device: Device): Observable<any> {
    return this.http.post(environment.apiUrl + DEVICE_URL, device);
  }

  getDevices(): Observable<any> {
    return this.http.get(environment.apiUrl + DEVICE_URL);
  }

  getDevice(deviceId: number): Observable<any> {
    return this.http.get(environment.apiUrl + DEVICE_URL + deviceId + '/');
  }

  putDevice(device: Device): Observable<any> {
    return this.http.put(environment.apiUrl + DEVICE_URL + device.did + '/', device);
  }


  deleteDevice(deviceId: number): Observable<any> {
    return this.http.delete(environment.apiUrl + DEVICE_URL + deviceId + '/');
  }
}
