import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipie-list.component.html',
	styleUrls: [ './recipie-list.component.css' ],
})
export class RecipieListComponent implements OnInit {
	recipes: Recipe[];

	constructor(
		private RecipeService: RecipeService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.recipes = this.RecipeService.getRecipes();
	}

	onCreateRecipe(name, desc, urlImg) {
		this.RecipeService.createRecipe(name, desc, urlImg);
		this.recipes = this.RecipeService.getRecipes();
		this.router.navigate([ 'new' ], { relativeTo: this.route });
	}
}
