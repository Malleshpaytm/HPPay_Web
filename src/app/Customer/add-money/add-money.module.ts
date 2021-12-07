import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { addMoneyRoutingModule } from './add-money-routing.module';
import { AddMoneyComponent } from './add-money.component';



@NgModule({
  declarations: [
   
  
    AddMoneyComponent
  ],
  imports: [
    CommonModule,
    addMoneyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class AddMoneyModule {}
