import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe :Recipes;
  constructor() { }

  ngOnInit() {
  }

}
