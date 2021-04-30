import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient({ name, amount }: Ingredient) {
		this.ingredients.push(new Ingredient(name, amount));
    this.ingredientChanged.next(this.ingredients.slice());
	}

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}