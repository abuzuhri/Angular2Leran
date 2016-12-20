import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/recipe";
import {Ingredient} from "../entity/ingredient";



@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.ubmi.net/wp-content/uploads/2016/10/temp2.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

}
