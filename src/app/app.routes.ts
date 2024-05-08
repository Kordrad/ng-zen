import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge'),
  },
];
