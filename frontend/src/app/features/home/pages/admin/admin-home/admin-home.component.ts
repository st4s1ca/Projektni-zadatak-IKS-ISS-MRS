
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: false,
  styleUrl: './admin-home.component.scss',
  templateUrl: './admin-home.component.html',
})
export class AdminHome {

  constructor(private router: Router) {}

  adminSections = [
    {
      title: 'Tipovi recepata',
      description: 'Upravljanje tipovima i kategorijama recepata',
      icon: '🍰',
      route: '/admin/recipe-management'
    },
    {
      title: 'Kategorije namirnica',
      description: 'Upravljanje kategorijama namirnica',
      icon: '🥕',
      route: '/admin/ingredient-categories'
    },
    {
      title: 'Alergeni',
      description: 'Upravljanje alergenima koji se mogu javiti u hrani',
      icon: '⚠️',
      route: '/admin/allergens'
    },
    {
      title: 'Predlozi novih kategorija',
      description: 'Upravljanje predlozima korisnika za nove kategorije namirnica',
      icon: '💡',
      route: '/admin/category-suggestions'
    },
    {
      title: 'Prijava sadrzaja',
      description: 'Upravljanje prijavama neprikladnog sadrzaja od strane korisnika',
      icon: '📋',
      route: '/admin/content-reports'
    }
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
