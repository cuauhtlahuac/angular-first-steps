import { EventEmitter } from "@angular/core";
import { Recipe } from './recipie-list/recipe.model';

export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
		new Recipe(
			'a Test Recipe',
			'This is simply text',
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
		),
	];

  getRecipes() {
    return this.recipes.slice();
  }

  createRecipe (name, desc, urlImg) {
    this.recipes.push(
      new Recipe(
        name,
        desc,
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      ),
    );
  }
  

}