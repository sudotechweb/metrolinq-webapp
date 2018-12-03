// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { JsmapComponent } from './components/jsmap/jsmap.component';
import { appRoutes } from './router.module';
import { NguiMapModule } from '@ngui/map';
import { MapdataService } from './services/mapdata/mapdata.service';
import { SchedinfoService } from './services/schedinfo/schedinfo.service';
// import { Module } from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJJwsEFmpumoOoyxVPkRcdEbf_nNDF0rg'}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MapdataService, SchedinfoService],
  declarations: [ AppComponent, IndexComponent, CreateComponent, JsmapComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
