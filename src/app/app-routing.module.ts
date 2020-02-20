import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './book/list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './user/admin/admin.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
