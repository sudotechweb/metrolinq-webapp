import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PendingtripsService {
  public pendingTrips$: AngularFireDatabase;

  constructor(private _pendingTripsService: AngularFireDatabase) {
    _pendingTripsService.list('Completed Journey').valueChanges();
  }

  getPendingTripsData() {
    return this.pendingTrips$ = this._pendingTripsService;
  }
}
