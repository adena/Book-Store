import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../book/list/list.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ListComponent,
            },
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
