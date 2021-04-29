import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription; // here we declare a new Subscription instance

	constructor() {}

	ngOnInit() {
		this.firstSubscription = interval(1000) // Now we can store the subscription
			.subscribe((
				count, // Values that are emitted, in this case came from the interval function
			) => {
				console.log({ count });
			});
	}

	ngOnDestroy(): void {
		this.firstSubscription.unsubscribe(); // Here we unsubscribe 
	}
}
