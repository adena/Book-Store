import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './book/list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './user/admin/admin.component';


const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "",
    pathMatch: "full",
    component: ListComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
