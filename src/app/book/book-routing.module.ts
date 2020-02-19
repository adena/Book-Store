import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { DetailsComponent } from "./details/details.component";
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: "book",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "/book/add",
                runGuardsAndResolvers: 'always',
            },
            {
                path: "add",
                component: AddComponent,
                canActivate: [AuthGuard],
                runGuardsAndResolvers: 'always',
                data: {
                    isLogged: true
                },

            },
            {
                path: ":id",
                component: DetailsComponent,
                runGuardsAndResolvers: 'always',
            }
        ]
    }
];

export const BookRoutingModule = RouterModule.forChild(routes);
