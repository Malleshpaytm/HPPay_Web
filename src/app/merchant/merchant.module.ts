import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MerchantHeaderComponent } from './merchant-header/merchant-header.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    ProfileComponent,
    SidenavComponent,
    MerchantHeaderComponent,
    MerchantHomeComponent,
    ChangePasswordComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MerchantRoutingModule,
    PrimengModule
  ]
})
export class MerchantModule { }
