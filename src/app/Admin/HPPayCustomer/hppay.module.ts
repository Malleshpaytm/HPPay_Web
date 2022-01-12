import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hppayRoutingModule } from './hppay-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { CreatehppaycustomerComponent } from './profile/createhppaycustomer/createhppaycustomer.component';
import { ManagehppaycustomerComponent } from './profile/managehppaycustomer/managehppaycustomer.component';
import { ProfilemenuComponent } from './profile/profilemenu/profilemenu.component';
import { FinancialemenuComponent } from './financial/financialemenu/financialemenu.component';
import { BalanceinfoComponent } from './financial/balanceinfo/balanceinfo.component';
import { TransactiondetailComponent } from './financial/transactiondetail/transactiondetail.component';
import { ViewaccountstatementComponent } from './financial/viewaccountstatement/viewaccountstatement.component';
import { DownloadaccountstatementComponent } from './financial/downloadaccountstatement/downloadaccountstatement.component';
import { CustomerkycComponent } from './approval/customerkyc/customerkyc.component';
import { CardlessmapingComponent } from './cardlesstransaction/cardlessmaping/cardlessmaping.component';
import { ManageCardlessDashboadComponent } from './cardlesstransaction/manage-cardless-dashboad/manage-cardless-dashboad.component';
import { CcmsmenuComponent } from './ccmsrecharge/ccmsmenu/ccmsmenu.component';
import { VewccmsrechargeComponent } from './ccmsrecharge/vewccmsrecharge/vewccmsrecharge.component';
import { ViewcustomerfeedbackComponent } from './feedback/viewcustomerfeedback/viewcustomerfeedback.component';
import { FeedbackdetailComponent } from './feedback/feedbackdetail/feedbackdetail.component';
import { FeedbackmenuComponent } from './feedback/feedbackmenu/feedbackmenu.component';
import { ManageoffersComponent } from './offersandpromotion/manageoffers/manageoffers.component';
import { CreateoffersComponent } from './offersandpromotion/createoffers/createoffers.component';
import { OffermenulistComponent } from './offersandpromotion/offermenulist/offermenulist.component';
import { ViewOrUpdateCustomerDetailsComponent } from './profile/view-or-update-customer-details/view-or-update-customer-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CustomerDetailsModalComponent } from './customer-details-modal/customer-details-modal.component';

@NgModule({
  declarations: [
   
  
    CreatehppaycustomerComponent,
             ManagehppaycustomerComponent,
             ProfilemenuComponent,

             CustomerkycComponent,
             ViewcustomerfeedbackComponent,
             FeedbackdetailComponent,
             FeedbackmenuComponent,

             FinancialemenuComponent,
             BalanceinfoComponent,
             TransactiondetailComponent,
             ViewaccountstatementComponent,
             DownloadaccountstatementComponent,
             CustomerkycComponent,
             CardlessmapingComponent,
             ManageCardlessDashboadComponent,
             CcmsmenuComponent,
             VewccmsrechargeComponent,
             ManageoffersComponent,
             CreateoffersComponent,
             OffermenulistComponent,
             ViewOrUpdateCustomerDetailsComponent,
             CustomerDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    hppayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
    MaterialModule
  ],
})
export class hppayModule {}
