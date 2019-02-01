import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('The Biryani Recipe', 'This is the Simple Recipe', 
    'https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Chicken%20Biryani%20(2).jpg'),
    new Recipes('Chicken Lollipop Recipe', 'This is the Best', 
    'https://foodibase.com/wp-content/uploads/2018/07/Chicken-Lollipop.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipes>()
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }
}
