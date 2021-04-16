import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	showFeature: boolean = true;

	onNavigate(event: string) {
		this.showFeature = event !== 'recipe' ? false : true;
	}
}
