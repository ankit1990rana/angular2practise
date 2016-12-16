import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomeComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
