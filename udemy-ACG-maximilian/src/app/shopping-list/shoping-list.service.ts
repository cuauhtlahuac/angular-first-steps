import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient({ name, amount }: Ingredient) {
		this.ingredients.push(new Ingredient(name, amount));
    this.ingredientChanged.emit(this.ingredients.slice());
	}

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}