import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CartComponent,
            },
            {
                path: 'login',
                component: LoginComponent,

            },
            {
                path: 'register',
                component: RegisterComponent,

            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
