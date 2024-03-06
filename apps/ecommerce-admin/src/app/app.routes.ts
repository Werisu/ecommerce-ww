import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('user').then((m) => m.productDetailRoutes),
  },
];
