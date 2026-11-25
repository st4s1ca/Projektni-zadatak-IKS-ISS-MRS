import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  styleUrl: './recipe-card.component.scss',
  templateUrl: './recipe-card.component.html',
})
export class RecipeCard {
  @Input({ required: true }) recipe!: Recipe;
}
