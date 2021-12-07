import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { interfaceRoutingModule } from './interface-routing.module';
import { InterfacemenuComponent } from './interfacemenu/interfacemenu.component';
import { RequestccmdrechargethrougheftComponent } from './requestccmdrechargethrougheft/requestccmdrechargethrougheft.component';
import { ApproveeftrechargerequestComponent } from './approveeftrechargerequest/approveeftrechargerequest.component';
import { ApproveeftreversalrequestComponent } from './approveeftreversalrequest/approveeftreversalrequest.component';
import { VieweftrechargerequestComponent } from './vieweftrechargerequest/vieweftrechargerequest.component';
import { RequestccmsrechargereversalComponent } from './requestccmsrechargereversal/requestccmsrechargereversal.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
   
  
    InterfacemenuComponent,
             RequestccmdrechargethrougheftComponent,
             ApproveeftrechargerequestComponent,
             ApproveeftreversalrequestComponent,
             VieweftrechargerequestComponent,
             RequestccmsrechargereversalComponent,
            
  ],
  imports: [
    MaterialModule,
    CommonModule,
    interfaceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class interfaceModule {}
