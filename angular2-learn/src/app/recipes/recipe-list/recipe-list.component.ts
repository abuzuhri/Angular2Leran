import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import  {Recipe} from '../recipe';
import {LogService} from "../../service/log.service";
import {RecipeService} from "../../service/recipe.service";
import {log} from "util";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
