import { Routes } from '@angular/router';
import { LoggedInGuard } from './logged-in-guard.service';
export const routes: Routes=
  [    
    {path:'', redirectTo:'home',pathMatch:"full"},
    { path: 'home', loadComponent: () => import('./transflower/home/home.component').then(m => m.HomeComponent) },
    { path: 'services', loadComponent: () => import('./transflower/mentoring/mentoring.component').then(m => m.MentoringComponent) },
    { path: 'about', loadComponent: () => import('./transflower/about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./transflower/contact/contact.component').then(m => m.ContactComponent) },

    { path: 'dashboard',loadComponent: () => import('./bi/dashboard/dashboard.component').then(m => m.DashboardComponent),
                        loadChildren: () => import('./bi/dashboard.routes').then(m => m.childRoutes)}, 
    { path: 'protected',loadComponent: () => import('./transflower/protected/protected.component').then(m => m.ProtectedComponent),canActivate: [LoggedInGuard]},
    { path: 'lists', loadComponent: () => import('./catalog/list/list.component').then(m => m.ListComponent) },
    { path: 'lists/:id', loadComponent: () => import('./catalog/details/details.component').then(m => m.DetailsComponent) },
    { path: 'details/:id', loadComponent: () => import('./catalog/details/details.component').then(m => m.DetailsComponent) },
    { path: 'update/:id', loadComponent: () => import('./catalog/update/update.component').then(m => m.UpdateComponent) },
    { path: 'delete/:id', loadComponent: () => import('./catalog/delete/delete.component').then(m => m.DeleteComponent) },
];