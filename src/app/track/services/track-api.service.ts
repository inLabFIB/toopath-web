import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {DEVICE_URL, TRACK_URL} from "../../shared/constants";
import {Track} from "../../objects/track";

@Injectable()
export class TrackApiService {

  constructor(private http: HttpClient) {
  }

  getTracks(deviceId: Number): Observable<any> {
    return this.http.get(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL);
  }

  getTrack(deviceId: Number, trackId: Number): Observable<any> {
    return this.http.get(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL + trackId + '/');
  }

  postTrack(track: Track, deviceId: Number): Observable<any> {
    return this.http.post(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL, track);
  }

  putTrack(track: Track, deviceId: Number): Observable<any> {
    return this.http.put(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL + track.tid + '/', track);
  }

  deleteTrack(deviceId: Number, trackId: Number): Observable<any> {
    return this.http.delete(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL + trackId + '/');
  }

}
