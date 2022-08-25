import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PersonsComponent } from './persons/persons.component';
import { ManagePersonsComponent } from './managePersons/manage-persons.component';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../core/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonsComponent,
    ManagePersonsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
	MaterialModule,
	ReactiveFormsModule
  ]
})
export class PagesModule { }
