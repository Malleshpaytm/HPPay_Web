import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactiondetailComponent } from '../Admin/HPPayCustomer/financial/transactiondetail/transactiondetail.component';
import { ErpreloadsaleearningdetailComponent } from '../Admin/Merchant/financials/erpreloadsaleearningdetail/erpreloadsaleearningdetail.component';
import { MerchantdaywiseearningviewComponent } from '../Admin/Merchant/financials/merchantdaywiseearningview/merchantdaywiseearningview.component';
import { QrcodetransactiondetailComponent } from '../Admin/Merchant/financials/qrcodetransactiondetail/qrcodetransactiondetail.component';
import { SettlementdetailComponent } from '../Admin/Merchant/financials/settlementdetail/settlementdetail.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantHomeComponent,
    children: [
      {
        path: 'Profile',
        component: ProfileComponent,
      },
      {
        path: 'settlement-details',
        component: SettlementdetailComponent
      },
      {
        path: 'transaction-details',
        component: TransactiondetailComponent
      },
      {
        path: 'mpmr-details',
        component: ProfileComponent
      },
      {
        path: 'erp-details',
        component: ErpreloadsaleearningdetailComponent
      },
      {
        path: 'earning-breakup',
        component: MerchantdaywiseearningviewComponent
      },
      {
        path: 'daywise-earning',
        component: MerchantdaywiseearningviewComponent
      },
      {
        path: 'qrtransaction-details',
        component: QrcodetransactiondetailComponent
      },
    ],
  },
  //
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
