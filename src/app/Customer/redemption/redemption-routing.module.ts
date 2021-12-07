import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { RedemptionComponent } from './redemption.component';


const routes: Routes = [
  
    

  { path: 'redemption' , component : RedemptionComponent },
 

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
export class redemptionRoutingModule {}
