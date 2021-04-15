import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipie-list.component.html',
	styleUrls: [ './recipie-list.component.css' ],
})
export class RecipieListComponent implements OnInit {
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe(
			'a Test Recipe',
			'This is simply text',
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
		),
	];

	onCreateRecipe(name, desc, urlImg) {
		this.recipes.push(
			new Recipe(
				name,
				desc,
				'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
			),
		);
	}

	constructor() {}

	ngOnInit(): void {}

	onReceiptSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}
}
