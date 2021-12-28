import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { ProfileComponent } from './profile/profile.component';
import { MerSettlementDetailsComponent } from './financials/mer-settlement-details/mer-settlement-details.component';
import { MerTransactionDetailsComponent } from './financials/mer-transaction-details/mer-transaction-details.component';
import { MerMpmrDetailsComponent } from './financials/mer-mpmr-details/mer-mpmr-details.component';
import { MerEarningBreakupComponent } from './financials/mer-earning-breakup/mer-earning-breakup.component';
import { MerDayearningDataComponent } from './financials/mer-dayearning-data/mer-dayearning-data.component';
import { MerQrTransactionsComponent } from './financials/mer-qr-transactions/mer-qr-transactions.component';
import { QrAgentsOnboardingComponent } from './qr-agents-onboarding/qr-agents-onboarding.component';
import { AddFsmComponent } from './add-fsm/add-fsm.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantHomeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'settlement-details',
        component: MerSettlementDetailsComponent
      },
      {
        path: 'transaction-details',
        component: MerTransactionDetailsComponent
      },
      {
        path: 'mpmr-details',
        component: MerMpmrDetailsComponent
      },
      {
        path: 'erp-details',
        component: MerMpmrDetailsComponent
      },
      {
        path: 'earning-breakup',
        component: MerEarningBreakupComponent
      },
      {
        path: 'daywise-earning',
        component: MerDayearningDataComponent
      },
      {
        path: 'qrtransaction-details',
        component: MerQrTransactionsComponent
      },
      {
        path: 'qr-agents-onboarding',
        component: QrAgentsOnboardingComponent
      },
      {
        path: 'add-fsm',
        component: AddFsmComponent
      }
    ],
  },
  //
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
