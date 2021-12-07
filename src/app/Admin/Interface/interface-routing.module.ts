import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { InterfacemenuComponent } from './interfacemenu/interfacemenu.component';
import { RequestccmdrechargethrougheftComponent } from './requestccmdrechargethrougheft/requestccmdrechargethrougheft.component';
import { ApproveeftrechargerequestComponent } from './approveeftrechargerequest/approveeftrechargerequest.component';
import { ApproveeftreversalrequestComponent } from './approveeftreversalrequest/approveeftreversalrequest.component';
import { VieweftrechargerequestComponent } from './vieweftrechargerequest/vieweftrechargerequest.component';
import { RequestccmsrechargereversalComponent } from './requestccmsrechargereversal/requestccmsrechargereversal.component';
 

const routes: Routes = [
  
  { path: 'interfacemenu', component:InterfacemenuComponent},
  { path: 'requestccmdrechargethrougheft' , component : RequestccmdrechargethrougheftComponent},
  { path : 'approveeftrechargerequest', component : ApproveeftrechargerequestComponent },
  { path : 'approveeftreversalrequest', component : ApproveeftreversalrequestComponent },
  { path : 'vieweftrechargerequest' , component :  VieweftrechargerequestComponent},
  { path : 'requestccmsrechargereversal' , component : RequestccmsrechargereversalComponent },

  {
    path: '',
    redirectTo: '/admin/interface/interfacemenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class interfaceRoutingModule {}
