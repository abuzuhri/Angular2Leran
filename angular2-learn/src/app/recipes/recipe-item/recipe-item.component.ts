import { Component, OnInit,Input } from '@angular/core';
import  {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  recipeId;

  constructor() { }

  ngOnInit() {
  }

}
