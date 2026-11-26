import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Home } from './pages/home/home.component';
import { RecipeCard } from './components/recipe-card/recipe-card.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [Home, RecipeCard, AdminComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
