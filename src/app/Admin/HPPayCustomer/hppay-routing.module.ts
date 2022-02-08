import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CreatehppaycustomerComponent } from './profile/createhppaycustomer/createhppaycustomer.component';
import { ManagehppaycustomerComponent } from './profile/managehppaycustomer/managehppaycustomer.component';
import { ProfilemenuComponent } from './profile/profilemenu/profilemenu.component';
import { FinancialemenuComponent } from './financial/financialemenu/financialemenu.component';
import { BalanceinfoComponent } from './financial/balanceinfo/balanceinfo.component';
import { TransactiondetailComponent }  from './financial/transactiondetail/transactiondetail.component';
import { ViewaccountstatementComponent } from './financial/viewaccountstatement/viewaccountstatement.component';
import { DownloadaccountstatementComponent } from './financial/downloadaccountstatement/downloadaccountstatement.component';
import { CustomerkycComponent } from './approval/customerkyc/customerkyc.component';
import { ManageCardlessDashboadComponent } from './cardlesstransaction/manage-cardless-dashboad/manage-cardless-dashboad.component';
import { CardlessmapingComponent } from './cardlesstransaction/cardlessmaping/cardlessmaping.component';
import { CcmsmenuComponent } from './ccmsrecharge/ccmsmenu/ccmsmenu.component';
import { VewccmsrechargeComponent } from './ccmsrecharge/vewccmsrecharge/vewccmsrecharge.component';
import { ViewcustomerfeedbackComponent } from './feedback/viewcustomerfeedback/viewcustomerfeedback.component';
import { FeedbackdetailComponent } from './feedback/feedbackdetail/feedbackdetail.component';
import { FeedbackmenuComponent } from './feedback/feedbackmenu/feedbackmenu.component';
import { ManageoffersComponent } from './offersandpromotion/manageoffers/manageoffers.component';
import { CreateoffersComponent } from './offersandpromotion/createoffers/createoffers.component';
import { OffermenulistComponent } from './offersandpromotion/offermenulist/offermenulist.component';
import { ViewOrUpdateCustomerDetailsComponent } from './profile/view-or-update-customer-details/view-or-update-customer-details.component';
import { ApprovalmenuComponent } from '../Merchant/approval/approvalmenu/approvalmenu.component';
import { ApprovalMenuComponent } from './approval/approval-menu/approval-menu.component';

const routes: Routes = [
  { path: 'createcustomer', component: CreatehppaycustomerComponent },
  { path: 'managecustomer', component: ManagehppaycustomerComponent },
  { path: 'RetailCustomerUpdation', component:ViewOrUpdateCustomerDetailsComponent},
  { path: 'profilemenu', component: ProfilemenuComponent },
  { path: 'approvalmenu', component: ApprovalMenuComponent },
  { path: 'customerkyc', component: CustomerkycComponent },
  { path: 'viewcustomerfeedback', component: ViewcustomerfeedbackComponent },
  { path: 'feedbackdetail', component: FeedbackdetailComponent },
  { path: 'feedbackmenu', component: FeedbackmenuComponent },


  { path: 'financialemenu', component: FinancialemenuComponent },
  { path: 'balanceinfo' ,  component : BalanceinfoComponent},
  { path :'transactiondetail' , component : TransactiondetailComponent},
  { path : 'viewaccountstatement' ,  component : ViewaccountstatementComponent},
  { path : 'downloadaccountstatement' ,  component : DownloadaccountstatementComponent},
  { path: 'offers', component: ManageoffersComponent },
  { path: 'createoffers', component: CreateoffersComponent },
  { path: 'offermenu', component: OffermenulistComponent },


  { path: 'ManageCardlessDashboad' , component : ManageCardlessDashboadComponent},
  { path: 'cardlessmaping' , component : CardlessmapingComponent},

  {path : 'ccmsmenu' , component : CcmsmenuComponent},
  {path : 'vewccmsrecharge' , component : VewccmsrechargeComponent},

  

  {
    path: '',
    redirectTo: '/admin/HPPayCustomer/createcustomer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class hppayRoutingModule {}
