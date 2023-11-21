import { Route } from '@angular/router';
import { LayoutComponent } from 'layout';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => (import('home')).then((m) => m.HomeModule),
            }
        ],
    },
];
