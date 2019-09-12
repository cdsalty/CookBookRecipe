import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Broccoli and Rice', 'Cooking Directions:', 'https://live.staticflickr.com/1286/3264550785_58bab7e44b_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

