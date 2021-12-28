import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MerchantprofilemenlistComponent } from './merchantprofile/merchantprofilemenlist/merchantprofilemenlist.component';
import { ManageprofileComponent } from './merchantprofile/manageprofile/manageprofile.component';
import { VerifymerchantprofileComponent } from './merchantprofile/verifymerchantprofile/verifymerchantprofile.component';
import { RejectedmerchantComponent } from './merchantprofile/rejectedmerchant/rejectedmerchant.component';
import { RejectedmerchanteditComponent } from './merchantprofile/rejectedmerchantedit/rejectedmerchantedit.component';
import { MerchantfinancialmenuComponent  } from './financials/merchantfinancialmenu/merchantfinancialmenu.component';
import { SettlementdetailComponent }  from './financials/settlementdetail/settlementdetail.component';
import { TransactiondetailComponent } from './financials/transactiondetail/transactiondetail.component';
import { ReceivablepayabledetailComponent } from './financials/receivablepayabledetail/receivablepayabledetail.component';
import { ErpreloadsaleearningdetailComponent }  from './financials/erpreloadsaleearningdetail/erpreloadsaleearningdetail.component';
import { MerchantaccountstatementrequestComponent } from './financials/merchantaccountstatementrequest/merchantaccountstatementrequest.component';
import { MerchantaccountstatementdownloadComponent } from './financials/merchantaccountstatementdownload/merchantaccountstatementdownload.component';
import { MerchanttransactionviewComponent } from './financials/merchanttransactionview/merchanttransactionview.component';
import { MerchantdaywiseearningviewComponent } from './financials/merchantdaywiseearningview/merchantdaywiseearningview.component';
import { QrcodetransactiondetailComponent } from './financials/qrcodetransactiondetail/qrcodetransactiondetail.component';
import { ApprovalmenuComponent }  from './approval/approvalmenu/approvalmenu.component';
import { MerchantapprovalComponent } from './approval/merchantapproval/merchantapproval.component';
import { MerchantcredentailrequestComponent }  from './approval/merchantcredentailrequest/merchantcredentailrequest.component';
import { SmsalertdealerComponent } from './request/smsalertdealer/smsalertdealer.component';
import { CustomerreferalrequestComponent } from './request/customerreferalrequest/customerreferalrequest.component';
import { GenerateqrcodeComponent } from './request/generateqrcode/generateqrcode.component';
import { ProductmappingComponent } from './request/productmapping/productmapping.component';
import { MerchantmenuComponent } from './request/merchantmenu/merchantmenu.component';
import { MerchantCreationViewComponent } from './approval/merchant-creation-view/merchant-creation-view.component';
import { ManageqrcodeComponent } from './request/manageqrcode/manageqrcode.component';


const routes: Routes = [
  
    { path: 'merchantprofilemenu', component: MerchantprofilemenlistComponent },
    { path: 'manageprofile', component: ManageprofileComponent },
    { path: 'verifymerchant', component: VerifymerchantprofileComponent },
    { path: 'rejectedmerchant', component: RejectedmerchantComponent },
    { path: 'rejectedmerchantedit', component: RejectedmerchanteditComponent },

    { path: 'merchantfinancialmenu', component: MerchantfinancialmenuComponent },
    { path: 'settlementdetail', component: SettlementdetailComponent },
    { path: 'transactiondetail', component: TransactiondetailComponent },
    { path: 'receivablepayabledetail' , component : ReceivablepayabledetailComponent },
    { path : 'erpreloadsaleearningdetail' , component :  ErpreloadsaleearningdetailComponent},
    { path : 'merchantaccountstatementrequest', component :  MerchantaccountstatementrequestComponent},
    { path : 'merchantaccountstatementdownload' ,  component : MerchantaccountstatementdownloadComponent},
    { path : 'merchanttransactionview' ,  component :  MerchanttransactionviewComponent},
    { path : 'merchantdaywiseearningview' , component :   MerchantdaywiseearningviewComponent},
    { path:  'qrcodetransactiondetail' , component :  QrcodetransactiondetailComponent},
    { path : 'approvalmenu' , component : ApprovalmenuComponent},
    { path : 'merchantapproval' , component :  MerchantapprovalComponent},
    { path:'merchantcreationview', component:MerchantCreationViewComponent},
    { path : 'merchantcredentailrequest' , component : MerchantcredentailrequestComponent},
    { path: 'smsalert' , component :  SmsalertdealerComponent},
    { path: 'customerreferal' , component :  CustomerreferalrequestComponent},
    {path:'ManageQR', component:ManageqrcodeComponent},
    { path: 'generateqrcode' , component :  GenerateqrcodeComponent},
    { path: 'productmapping' , component :  ProductmappingComponent},
    { path: 'merchantmenu' , component :  MerchantmenuComponent},



  {
    path: '',
    redirectTo: '/admin/merchant/merchantprofilemenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class merchantRoutingModule {}
