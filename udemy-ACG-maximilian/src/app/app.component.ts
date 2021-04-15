import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	showFeature: boolean;

	onNavigate(event: string) {
		this.showFeature = event === 'recipe' ? true : false;
	}
}
