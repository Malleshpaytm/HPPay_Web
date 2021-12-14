import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { corporateRoutingModule } from './corporatecustomer-routing.module';
import { ProfilemenuComponent } from './profile/profilemenu/profilemenu.component';
import { AddcustomerComponent } from './profile/addcustomer/addcustomer.component';
import { VerifycustomerComponent } from './profile/verifycustomer/verifycustomer.component';
import { ManagecustomerComponent } from './profile/managecustomer/managecustomer.component';
import { CustomerbonusmenuComponent } from './customerbonus/customerbonusmenu/customerbonusmenu.component';
import { ManagecustomerbonusComponent } from './customerbonus/managecustomerbonus/managecustomerbonus.component';
import { AddcustomerbonusComponent } from './customerbonus/addcustomerbonus/addcustomerbonus.component';
import { ApprovecustomerbonusComponent } from './customerbonus/approvecustomerbonus/approvecustomerbonus.component';
import { AuthorizecustomerbonusComponent } from './customerbonus/authorizecustomerbonus/authorizecustomerbonus.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
   
  
  
    ProfilemenuComponent,
                AddcustomerComponent,
                VerifycustomerComponent,
                ManagecustomerComponent,
                CustomerbonusmenuComponent,
                ManagecustomerbonusComponent,
                AddcustomerbonusComponent,
                ApprovecustomerbonusComponent,
                AuthorizecustomerbonusComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    corporateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class corporateModule {}
