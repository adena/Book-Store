import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: "book",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "/book/add"
            },
            {
                path: "add",
                component: AddComponent,

            },
            {
                path: ":id",
                component: DetailsComponent,
            }
        ]
    }
];

export const BookRoutingModule = RouterModule.forChild(routes);
