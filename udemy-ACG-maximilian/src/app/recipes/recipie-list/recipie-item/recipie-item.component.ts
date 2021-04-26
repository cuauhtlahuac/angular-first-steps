import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipie-item.component.html',
	styleUrls: [ './recipie-item.component.css' ],
})
export class RecipieItemComponent implements OnInit {
	@Input() recipe: Recipe;

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {}

	onSelectItem() {
		this.recipeService.recipeSelected.emit(this.recipe);
	}
}
