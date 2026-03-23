import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'generator',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
  },
  {
    path: 'generator',
    loadComponent: () => import('./features/generator/generator').then(m => m.Generator),
    canActivate: [authGuard]
  },
  {
    path: 'history',
    loadComponent: () => import('./features/history/history').then(m => m.History),
    canActivate: [authGuard]
  },
  {
    path: 'about', // ← ajouté
    loadComponent: () => import('./features/about/about').then(m => m.About),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'generator'
  }

];
