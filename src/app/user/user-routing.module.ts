import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../book/list/list.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'admin',
                component: AdminComponent,
            },
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
