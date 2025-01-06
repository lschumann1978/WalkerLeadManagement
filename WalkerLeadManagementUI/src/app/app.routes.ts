import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/lead-dashboard/lead-dashboard.component').then(
        (m) => m.LeadDashboardComponent
      ),
  },
  {
    path: 'lead/:id',
    loadComponent: () =>
      import('./components/lead-details/lead-details.component').then(
        (m) => m.LeadDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
