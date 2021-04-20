import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  ingredientCreated = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Rocks', 3),
	];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient({ name, amount }: Ingredient) {
		this.ingredients.push(new Ingredient(name, amount));
    this.ingredientCreated.emit(this.ingredients.slice());
	}
}