import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { SearchmenuComponent } from './searchmenu/searchmenu.component';
import { SearchparamrterComponent } from './searchparamrter/searchparamrter.component';
import { ResultparameterComponent } from './resultparameter/resultparameter.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';

const routes: Routes = [
  
    

  { path: 'searchmenu' , component : SearchmenuComponent },
  { path: 'searchparamrter' , component : SearchparamrterComponent },
  { path : 'resultparameter' , component : ResultparameterComponent},
  { path : 'adminsearch', component :  AdminsearchComponent},

  {
    path: '',
    redirectTo: '/admin/search/searchmenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class searchRoutingModule {}
