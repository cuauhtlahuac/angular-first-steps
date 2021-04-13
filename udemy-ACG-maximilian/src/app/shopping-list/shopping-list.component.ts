import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Rocks', 3),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
