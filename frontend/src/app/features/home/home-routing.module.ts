
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home.component';
import { AdminHome } from './pages/admin/admin-home/admin-home.component';
import { RecipeManagement } from './pages/admin/recipe-management/recipe-management.component';
import { IngredientCategories } from './pages/admin/ingredient-categories/ingredient-categories.component';
import { Allergens } from './pages/admin/allergens/allergens.component';
import { CategorySuggestions } from './pages/admin/category-suggestions/category-suggestions.component';
import { ContentReports } from './pages/admin/content-reports/content-reports.component';

const routes: Routes = [
  { path: '', component: Home },

  { path: 'admin', component: AdminHome },
  { path: 'admin/recipe-management', component: RecipeManagement },
  { path: 'admin/ingredient-categories', component: IngredientCategories },
  { path: 'admin/allergens', component: Allergens },
  { path: 'admin/category-suggestions', component: CategorySuggestions },
  { path: 'admin/content-reports', component: ContentReports }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
