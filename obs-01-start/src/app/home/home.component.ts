import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

		customIntervalObservable.pipe(filter(data => data > 0) // here we also use filter, that only return the value if is grater than 0
		, map((data) => { // Here we use a pipe to transform the data before is used by the subscribe
			return 'round: ' + data;
		}))
		.subscribe(
			data => { // receiving the data emitting
				console.log({ data });
			},
			error => { // the second argument is something that should append if there is and error
				//alert('Time is up');
			},
			() => { // Third argument is for complete actions, complete doesn't pass any argument
				//alert('The time has completed')
			}
		);
	}

	ngOnDestroy(): void {
		
	}
}
