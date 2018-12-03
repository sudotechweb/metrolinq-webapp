import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SchedinfoService } from 'src/app/services/schedinfo/schedinfo.service';

@Component({
  selector: 'app-jsmap',
  templateUrl: './jsmap.component.html',
  styleUrls: ['./jsmap.component.css']
})

export class JsmapComponent implements OnInit {
  public scheduledJourneys$: SchedinfoService;
  constructor(private _schedInfoService: SchedinfoService) {
    this._schedInfoService.getScheduleInfo().subscribe(); // for use with firebase
    // this._schedInfoService.getScheduleInfo(); // for use on local
  }

  ngOnInit() {
    this.scheduledJourneys$ = this._schedInfoService;
    console.log('journey', this.scheduledJourneys$.getScheduleInfo());
    // this._schedInfoService.getScheduleInfo().forEach(element => {
      // console.log(element);
    // });
  }

}
