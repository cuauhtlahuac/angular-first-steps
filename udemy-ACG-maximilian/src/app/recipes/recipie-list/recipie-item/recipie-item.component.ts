import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipie-item.component.html',
	styleUrls: [ './recipie-item.component.css' ],
})
export class RecipieItemComponent implements OnInit {
	@Input() recipe: Recipe;

	ngOnInit(): void {}
}
