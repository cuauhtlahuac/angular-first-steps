import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: [ './shopping-list.component.css' ],
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Rocks', 3),
	];

	constructor() {}

	ngOnInit(): void {}

	onAddIngredient({ name, amount }: Ingredient) {
		this.ingredients.push(new Ingredient(name, amount));
	}
}
