import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePersonsComponent } from './managePersons/manage-persons.component';
import { PagesComponent } from './pages.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
	{
		path:'', component:PagesComponent,
		children:[
			{
				path:'home',
				component: PersonsComponent
			},
			{
				path:'edicion',
				component: ManagePersonsComponent
			}
		]
	},	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
