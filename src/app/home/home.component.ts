import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public sliderIndex:Number;
  constructor() {
    let n =1;
     setInterval(() => {
      this.sliderIndex = n;
      n++;
      console.log(n);
    }, 1000);
   }

  ngOnInit() {
  }

}
