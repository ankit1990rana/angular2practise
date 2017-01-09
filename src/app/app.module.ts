import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ng2-bootstrap/carousel';
//import { HttpModule } from '@angular/http';
import { PushNotificationsModule } from "angular2-notifications";


import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';
import { AnimationComponent } from './animation/animation.component';
import { CrousalComponent } from './crousal/crousal.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomeComponent,
    AnimationComponent,
    CrousalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    PushNotificationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
