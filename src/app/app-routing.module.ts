import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './book/list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './book/details/details.component';


const routes: Routes = [
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
