import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [ './shopping-edit.component.css' ],
})
export class ShoppingEditComponent implements OnInit {
	name: string;
	amount: number = 1;
	@Output() addItem = new EventEmitter<Ingredient>();
	constructor() {}

	ngOnInit(): void {}

	onAddIngredient() {
		this.addItem.emit({ name: this.name, amount: this.amount });
    this.clearIngredient();
	}

  clearIngredient(){
    this.name = undefined;
    this.amount = undefined;
  }
}
