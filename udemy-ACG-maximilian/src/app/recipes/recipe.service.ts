import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { Recipe } from './recipie-list/recipe.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Tlayuda',
			'Omakase de Tacos en la barra',
			'https://images.otstatic.com/prod/24951776/1/large.jpg',
			[
         new Ingredient('creme', 1),
         new Ingredient('sausage', 20) 
      ],
		),
		new Recipe(
			'Hawaiian Pizza',
			'Delicious flavor',
			'https://media.timeout.com/images/101833711/750/422/image.jpg',
			[
         new Ingredient('cheese', 3),
         new Ingredient('tomatoes', 5) 
      ],
		),
	];

	constructor(private shoppingListService: ShoppingListService){}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(id: number) {
		return { ...this.recipes.slice()[id] };
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredients(ingredients)
  }

	createRecipe(name, desc, urlImg) {
		this.recipes.push(
			new Recipe(
				name,
				desc,
				'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
        [
          new Ingredient('creme', 1),
          new Ingredient('sausage', 20) 
       ],
			),
		);
	}
}
