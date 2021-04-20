import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shoping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [ './shopping-edit.component.css' ],
})
export class ShoppingEditComponent implements OnInit {
	name: string;
	amount: number = 1;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {}

	onAddIngredient() {
		this.shoppingListService.addIngredient({
			name: this.name,
			amount: this.amount,
		});
		this.clearIngredient();
	}

	clearIngredient() {
		this.name = undefined;
		this.amount = 1;
	}
}
