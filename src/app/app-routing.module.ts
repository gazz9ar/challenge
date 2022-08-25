import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/pageNotFound/page-not-found.component';

const routes: Routes = [
	{
		path:'personas',
		loadChildren:() => import ('./pages/pages.module').then( m => m.PagesModule) 
	},	
	{ path:'home', component: HomeComponent },
	{ path:'', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
