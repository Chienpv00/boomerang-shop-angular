import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    children: [],
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
];
