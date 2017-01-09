import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crousal',
  templateUrl: './crousal.component.html',
  styleUrls: ['./crousal.component.css']
})
export class CrousalComponent implements OnInit {

  public myInterval:number = 5000;
  public noWrapSlides:boolean = true;
  public slides:any[] = [];
  public activeSlideIndex: number;

  constructor() { 
     this.slides = [
          { "title": "We are covered", "url": "../../../assets/images/california-sunset-recrop-1500x.jpg" },
          { "title": "Generation Gap", "url": "../../../assets/images/download.jpg" },
          { "title": "Pre-School Kids", "url": "../../../assets/images/stock-photo-151040087-1500x1000.jpg" },
          { "title": "Young Peter Cech", "url": "../../../assets/images/taking-photo-hiking-sport-adventure.jpg" } 
        ];
  }

  ngOnInit() { }



}
