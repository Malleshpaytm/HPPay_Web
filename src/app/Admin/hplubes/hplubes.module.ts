import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { hplubesRoutingModule } from './hplubes-routing.module';
import { HplubesmenuComponent } from './hplubesmenu/hplubesmenu.component';
import { LubesorderapprovalComponent } from './lubesorderapproval/lubesorderapproval.component';
import { LubedetailComponent } from './lubedetail/lubedetail.component';



@NgModule({
  declarations: [
   
  
  
    HplubesmenuComponent,
                LubesorderapprovalComponent,
                LubedetailComponent
                
  ],
  imports: [
    CommonModule,
    hplubesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class hplubesModule {}
