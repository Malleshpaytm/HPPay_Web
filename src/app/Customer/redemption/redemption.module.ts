import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { redemptionRoutingModule } from './redemption-routing.module';
import { RedemptionComponent } from './redemption.component';



@NgModule({
  declarations: [
   
  
    RedemptionComponent
  ],
  imports: [
    CommonModule,
    redemptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class RedemptionModule {}
