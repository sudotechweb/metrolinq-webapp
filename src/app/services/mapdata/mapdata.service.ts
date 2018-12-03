import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  constructor() { }

  getMapData() {
    return [
      {
        'key': {
          'assignDriver': 'no',
          'clientName': 'Bradley',
          'desLat': -9.457221098005244,
          'desLon': 147.18824978917837,
          'fare': 10,
          'currentDate': {
            'day': 31,
            'hour': 9,
            'min': 41,
            'year': 2018,
            'month': 10
          },
          'oriLat': -9.462600865808417,
          'oriLon': 147.19655491411686,
          'payType': 'cash',
        }
      }
    ];
  }
}
