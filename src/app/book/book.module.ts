import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AddComponent } from './add/add.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { LayoutModule } from '@angular/cdk/layout';
import { DetailsComponent } from './details/details.component';
import { BookRoutingModule } from './book-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    BookRoutingModule,
    MatDividerModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [ListComponent, AddComponent, DetailsComponent]
})
export class BookModule { }
