import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AddMoneyComponent } from './add-money.component';


const routes: Routes = [
  
    

  { path: 'addmoney' , component : AddMoneyComponent },
 

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
export class addMoneyRoutingModule {}
