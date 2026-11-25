import { Component } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})

export class Home {
  popularRecipes: Recipe[] = [
    {
      id: 1,
      name: 'Pancakes',
      imageUrl: '/images/pancakes.jfif',
      preparationTime: 25,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Carbonara',
      imageUrl: '/images/carbonara.jfif',
      preparationTime: 30,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Tiramisu',
      imageUrl: '/images/tiramisu.jfif',
      preparationTime: 45,
      rating: 4.7
    }
  ];

  searchQuery: string = '';

onSearch(event: Event, value: string): void {
  event.preventDefault();
  this.searchQuery = value.trim().toLowerCase();
}

get filteredRecipes(): Recipe[] {
  return this.popularRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(this.searchQuery)
  );
}
}