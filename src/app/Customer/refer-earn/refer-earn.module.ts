import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { referRoutingModule } from './refer-earn-routing.module';
import { ReferEarnComponent } from './refer-earn.component';



@NgModule({
  declarations: [
   
  
    ReferEarnComponent
  ],
  imports: [
    CommonModule,
    referRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class ReferModule {}
