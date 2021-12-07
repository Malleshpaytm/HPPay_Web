import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { HplubesmenuComponent } from './hplubesmenu/hplubesmenu.component';
import { LubesorderapprovalComponent } from './lubesorderapproval/lubesorderapproval.component';
import { LubedetailComponent } from './lubedetail/lubedetail.component';


const routes: Routes = [

  { path: 'hplubesmenu' ,  component: HplubesmenuComponent },
  { path: 'lubesorderapproval' ,  component: LubesorderapprovalComponent },
  { path: 'lubedetail' , component : LubedetailComponent},
  
  {
    path: '',
    redirectTo: '/admin/hplubes/hplubesmenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class hplubesRoutingModule {}
