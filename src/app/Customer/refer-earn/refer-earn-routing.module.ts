import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ReferEarnComponent } from './refer-earn.component';


const routes: Routes = [
  
    

  { path: 'referandearn' , component : ReferEarnComponent },
 

  {
    path: '',
    redirectTo: '/customer/viewstatement',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class referRoutingModule {}
