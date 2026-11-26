import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Home } from './pages/home/home.component';
import { RecipeCard } from './components/recipe-card/recipe-card.component';
import { AdminHome } from './pages/admin/admin-home/admin-home.component';
import { RecipeManagement } from './pages/admin/recipe-management/recipe-management.component';
import { IngredientCategories } from './pages/admin/ingredient-categories/ingredient-categories.component';
import { Allergens } from './pages/admin/allergens/allergens.component';
import { CategorySuggestions } from './pages/admin/category-suggestions/category-suggestions.component';
import { ContentReports } from './pages/admin/content-reports/content-reports.component';

@NgModule({
  declarations: [
    Home,
    RecipeCard,
    AdminHome,
    RecipeManagement,
    IngredientCategories,
    Allergens,
    CategorySuggestions,
    ContentReports,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
