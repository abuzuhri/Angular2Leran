import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import  {Recipe} from '../recipe';
import {LogService} from "../../service/log.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe=new Recipe('Dummy','dummy description','http://previewcf.turbosquid.com/Preview/2014/05/21__03_48_03/dummy_1.jpg73a34682-6a0e-42f8-bbeb-b21eaa495913Original.jpg');

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    console.log('recipe...',recipe);
    this.recipeSelected.emit(recipe);
    this.logService.writeToLog('recipe ... ')
  }
}
