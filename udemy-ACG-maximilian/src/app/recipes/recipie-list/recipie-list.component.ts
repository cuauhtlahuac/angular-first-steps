import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipie-list.component.html',
	styleUrls: [ './recipie-list.component.css' ],
})
export class RecipieListComponent implements OnInit {
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipes: Recipe[];

	onCreateRecipe(name, desc, urlImg) {
		this.RecipeService.createRecipe(name, desc, urlImg)
		this.recipes = this.RecipeService.getRecipes();
	}

	constructor(private RecipeService: RecipeService) {}

	ngOnInit(): void {
		this.recipes = this.RecipeService.getRecipes();
	}

	onReceiptSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}
}
