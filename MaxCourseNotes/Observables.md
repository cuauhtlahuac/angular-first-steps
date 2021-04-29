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