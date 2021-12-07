import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { StatementComponent } from './statement.component';


const routes: Routes = [
  
    

  { path: 'viewstatement' , component : StatementComponent },
 

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
export class statementRoutingModule {}
