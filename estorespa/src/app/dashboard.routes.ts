
import { Routes } from '@angular/router';
 

    
export const childRoutes:Routes=[

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

     { path: 'bar', loadComponent: () => import('./bi/barchart/barchart.component').then(m => m.BarchartComponent) },
      { path: 'pie', loadComponent: () => import('./bi/pie-chart/pie-chart.component').then(m => m.PieChartComponent)},
    ];
