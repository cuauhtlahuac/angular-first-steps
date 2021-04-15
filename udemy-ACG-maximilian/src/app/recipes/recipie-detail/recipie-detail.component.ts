import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipie-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
