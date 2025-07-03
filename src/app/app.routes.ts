import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'buscar-calles',
    loadComponent: () => import('./pages/street-search/street-search').then(m => m.StreetSearchComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
