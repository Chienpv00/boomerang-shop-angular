import { Route } from '@angular/router';
import { LayoutComponent } from 'layout';

export const shellRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        // children: [
        //     {
        //         path: '',
        //     }
        // ],
    },
];

