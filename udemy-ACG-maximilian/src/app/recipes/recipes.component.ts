import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipie-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
}
