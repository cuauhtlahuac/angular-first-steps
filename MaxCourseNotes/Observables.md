# Observables

[Observables Documentation](https://angular.io/guide/observables-in-angular)

### What is an Observable?

- Is basically an object imported from a third party package Rxjs.
- Is made by a pattern, observable, observer:
- We have a stream of events (time line) emitted by the observable.
- Observable emits
- Observer handle Data, Errors or Completion

### Using a Observable

- Here we use an observable

```ts
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
		this.firstSubscription = interval(1000) // Here we store the subscription
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

```

### Creating a custom Observable

- Here we create a similar observables as provided by the rxjs library

```ts
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
```

### Handle errors

```ts
	ngOnInit() {
		const customIntervalObservable = Observable.create((
			observer, // is the listener
		) => {
			let count = 0;
			setInterval(() => {
				if (count < 3) {
					observer.next(count); // To emit a new value
				} else {
					observer.error(new Error('time is up')); // Here we provoked and error
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
		);
	}
```

### Completed 

```ts
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
```

- In error or complete the observable will be stopped

## Operators

- Rxjs has operators to manipulate the data

```ts
		customIntervalObservable.pipe( // Here we use a observable pipe method to transform the data before is used by the subscribe
			map((data) => {  // Map is a rxjs operator
			return 'round: ' + data;
		}))
		.subscribe(
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
```