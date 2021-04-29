import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription; // here we declare a new Subscription instance

	constructor() {}

	ngOnInit() {
	const customIntervalObservable =	Observable.create(
		observer => // is the listener
		  {
			 let count = 0;
			 setInterval( () => {
				 observer.next(count); // To emit a new value
				 count++
			 }, 1000)
		 })
		
	customIntervalObservable.subscribe(data => { // receiving the data emitting
		console.log({data});
	});		 

	}

	ngOnDestroy(): void {
		this.firstSubscription.unsubscribe(); // Here we unsubscribe 
	}
}
