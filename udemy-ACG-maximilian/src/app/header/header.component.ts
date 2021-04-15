import { Component, EventEmitter, Output } from '@angular/core';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	collapsed: boolean = true;
	showRecipes: boolean = true;
	@Output() showRecipesView = new EventEmitter<boolean>();

	onRecipesClick() {
		this.showRecipes = true;
		this.showRecipesView.emit(this.showRecipes);
	}

	onShoppingClick() {
		this.showRecipes = false;
		this.showRecipesView.emit(this.showRecipes);
	}
}
