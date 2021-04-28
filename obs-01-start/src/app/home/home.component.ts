import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000) // This is a function provided for rxjs library
                  // Any second a new event will be emitted
    .subscribe(
      count => // Values that are emitted, in this case came from the interval function
      {
        console.log({count})
      }
    )
  }

}
