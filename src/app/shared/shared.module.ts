import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from '../core/modules/material.module';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
	HeaderComponent,
	PageNotFoundComponent,
	HomeComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,	
  ],
  exports:[
	HeaderComponent
  ]
})
export class SharedModule { }
