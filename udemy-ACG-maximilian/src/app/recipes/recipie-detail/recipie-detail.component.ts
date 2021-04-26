import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe } from '../recipie-list/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipie-detail.component.html',
	styleUrls: [ './recipie-detail.component.css' ],
})
export class RecipieDetailComponent implements OnInit {
	recipe: Recipe;
	id;
	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.id = params['id'];
      console.log('ijis');
      this.recipe = this.recipeService.getRecipes()[this.id];
		});
	}

	onAddToShoppingList() {
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}
}
