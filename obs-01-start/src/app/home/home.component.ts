import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit, OnDestroy {
	private firstSubscription: Subscription; // here we declare a new Subscription instance

	constructor() {}

	ngOnInit() {
		const customIntervalObservable = Observable.create((
			observer, // is the listener
		) => {
			let count = 0;
			setInterval(() => {
				if(count === 2) observer.complete(); // Here we complete the observable, it execute before  reach the error and never be emitted
				if (count < 3) {
					observer.next(count); // To emit a new value
				} else {
					observer.error(new Error('time is up'));
				}
				count++;
			}, 1000);
		});

		customIntervalObservable.subscribe(
			data => { // receiving the data emitting
				console.log({ data });
			},
			error => { // the second argument is something that should append if there is and error
				alert('Time is up');
			},
			() => { // Third argument is for complete actions, complete doesn't pass any argument
				alert('The time has completed')
			}
		);
	}

	ngOnDestroy(): void {
		this.firstSubscription.unsubscribe(); // Here we unsubscribe
	}
}
