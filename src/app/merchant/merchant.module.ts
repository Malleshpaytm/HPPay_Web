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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MerSettlementDetailsComponent } from './financials/mer-settlement-details/mer-settlement-details.component';
import { MerTransactionDetailsComponent } from './financials/mer-transaction-details/mer-transaction-details.component';
import { MerMpmrDetailsComponent } from './financials/mer-mpmr-details/mer-mpmr-details.component';
import { MerErpDetailsComponent } from './financials/mer-erp-details/mer-erp-details.component';
import { MerEarningBreakupComponent } from './financials/mer-earning-breakup/mer-earning-breakup.component';
import { MerDayearningDataComponent } from './financials/mer-dayearning-data/mer-dayearning-data.component';
import { MerQrTransactionsComponent } from './financials/mer-qr-transactions/mer-qr-transactions.component';
import { AcceptTransactionComponent } from './accept-transaction/accept-transaction.component';
import { RequestsComponent } from './requests/requests.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SidenavComponent,
    MerchantHeaderComponent,
    MerchantHomeComponent,
    ChangePasswordComponent,
    DashboardComponent,
    MerSettlementDetailsComponent,
    MerTransactionDetailsComponent,
    MerMpmrDetailsComponent,
    MerErpDetailsComponent,
    MerEarningBreakupComponent,
    MerDayearningDataComponent,
    MerQrTransactionsComponent,
    AcceptTransactionComponent,
    RequestsComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MerchantRoutingModule,
    PrimengModule
  ]
})
export class MerchantModule { }
