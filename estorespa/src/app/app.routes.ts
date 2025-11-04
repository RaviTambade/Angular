import { Routes } from '@angular/router';
import { LoggedInGuard } from './logged-in-guard.service';
export const routes: Routes=
  [    
    {path:'', redirectTo:'home',pathMatch:"full"},
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'services', loadComponent: () => import('./mentoring/mentoring.component').then(m => m.MentoringComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },

    { path: 'dashboard',loadComponent: () => import('./bi/dashboard/dashboard.component').then(m => m.DashboardComponent),
                        loadChildren: () => import('./dashboard.routes').then(m => m.childRoutes)}, 
    { path: 'protected',loadComponent: () => import('./protected/protected.component').then(m => m.ProtectedComponent),canActivate: [LoggedInGuard]},
    { path: 'lists', loadComponent: () => import('./list/list.component').then(m => m.ListComponent) },
    { path: 'lists/:id', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
    { path: 'details/:id', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
    { path: 'update/:id', loadComponent: () => import('./update/update.component').then(m => m.UpdateComponent) },
    { path: 'delete/:id', loadComponent: () => import('./delete/delete.component').then(m => m.DeleteComponent) },
];
