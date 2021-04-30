import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipie-item.component.html',
	styleUrls: [ './recipie-item.component.css' ],
})
export class RecipieItemComponent implements OnInit {
	@Input() recipe: Recipe;
	@Input() index: number;

	ngOnInit(): void {}
}
