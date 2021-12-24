import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { merchantRoutingModule } from './merchant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MerchantprofilemenlistComponent } from './merchantprofile/merchantprofilemenlist/merchantprofilemenlist.component';
import { ManageprofileComponent } from './merchantprofile/manageprofile/manageprofile.component';
import { VerifymerchantprofileComponent } from './merchantprofile/verifymerchantprofile/verifymerchantprofile.component';
import { RejectedmerchantComponent } from './merchantprofile/rejectedmerchant/rejectedmerchant.component';
import { RejectedmerchanteditComponent } from './merchantprofile/rejectedmerchantedit/rejectedmerchantedit.component';
import { SettlementdetailComponent } from './financials/settlementdetail/settlementdetail.component';
import { MerchantfinancialmenuComponent } from './financials/merchantfinancialmenu/merchantfinancialmenu.component';
import { TransactiondetailComponent } from './financials/transactiondetail/transactiondetail.component';
import { ReceivablepayabledetailComponent } from './financials/receivablepayabledetail/receivablepayabledetail.component';
import { ErpreloadsaleearningdetailComponent } from './financials/erpreloadsaleearningdetail/erpreloadsaleearningdetail.component';
import { MerchantaccountstatementrequestComponent } from './financials/merchantaccountstatementrequest/merchantaccountstatementrequest.component';
import { MerchantaccountstatementdownloadComponent } from './financials/merchantaccountstatementdownload/merchantaccountstatementdownload.component';
import { MerchanttransactionviewComponent } from './financials/merchanttransactionview/merchanttransactionview.component';
import { MerchantdaywiseearningviewComponent } from './financials/merchantdaywiseearningview/merchantdaywiseearningview.component';
import { QrcodetransactiondetailComponent } from './financials/qrcodetransactiondetail/qrcodetransactiondetail.component';
import { ApprovalmenuComponent } from './approval/approvalmenu/approvalmenu.component';
import { MerchantapprovalComponent } from './approval/merchantapproval/merchantapproval.component';
import { MerchantcredentailrequestComponent } from './approval/merchantcredentailrequest/merchantcredentailrequest.component';


import { SmsalertdealerComponent } from './request/smsalertdealer/smsalertdealer.component';
import { CustomerreferalrequestComponent } from './request/customerreferalrequest/customerreferalrequest.component';
import { GenerateqrcodeComponent } from './request/generateqrcode/generateqrcode.component';
import { ProductmappingComponent } from './request/productmapping/productmapping.component';
import { MerchantmenuComponent } from './request/merchantmenu/merchantmenu.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MerchantDetailsModalComponent } from './merchant-details-modal/merchant-details-modal.component';
import { MerchantCreationViewComponent } from './approval/merchant-creation-view/merchant-creation-view.component';
import { ManageqrcodeComponent } from './request/manageqrcode/manageqrcode.component';

@NgModule({
  declarations: [
   
  
    MerchantprofilemenlistComponent,
            ManageprofileComponent,
            VerifymerchantprofileComponent,
            RejectedmerchantComponent,
            RejectedmerchanteditComponent,
            SettlementdetailComponent,
            MerchantfinancialmenuComponent,
            TransactiondetailComponent,
            ReceivablepayabledetailComponent,
            ErpreloadsaleearningdetailComponent,
            MerchantaccountstatementrequestComponent,
            MerchantaccountstatementdownloadComponent,
            MerchanttransactionviewComponent,
            MerchantdaywiseearningviewComponent,
            QrcodetransactiondetailComponent,
            ApprovalmenuComponent,
            MerchantapprovalComponent,
            MerchantcredentailrequestComponent,
            SmsalertdealerComponent,
            CustomerreferalrequestComponent,
            GenerateqrcodeComponent,
            ProductmappingComponent,
            MerchantmenuComponent,
            MerchantDetailsModalComponent,
            MerchantCreationViewComponent,
            ManageqrcodeComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    merchantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class merchantModule {}
