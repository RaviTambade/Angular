import { Routes } from '@angular/router';
export const childRoutes:Routes=[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'bar', loadComponent: () => import('./barchart/barchart.component').then(m => m.BarchartComponent) },
    { path: 'pie', loadComponent: () => import('./pie-chart/pie-chart.component').then(m => m.PieChartComponent)},
];
