import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {DEVICE_URL, LOCATION_URL, TRACK_URL} from '../../shared/constants';
import {TrackLocation} from '../../objects/location';
import {Point} from 'geojson';

@Injectable()
export class TrackLocationApiService {

  constructor(private http: HttpClient) {
  }

  postTrackLocation(location: TrackLocation, trackId: Number, deviceId: Number): Observable<any> {
    let point = {
      'point': {
        'type': 'Point',
        'coordinates': [Number(location.latitude), Number(location.longitude)]
      }
    };
    return this.http.post(environment.apiUrl + DEVICE_URL + deviceId + TRACK_URL + trackId + LOCATION_URL, point);
  }
}
