import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { TransactionwisereportComponent } from './transactionwisereport/transactionwisereport.component';
import { DealerwisereportComponent } from './dealerwisereport/dealerwisereport.component';
import { CustomerreportComponent } from './customerreport/customerreport.component';
import { CustomerwiserewardingComponent } from './customerwiserewarding/customerwiserewarding.component';
import { CustomerwiseredemptionComponent } from './customerwiseredemption/customerwiseredemption.component';
import { NegativeloyalityreportComponent } from './negativeloyalityreport/negativeloyalityreport.component';
import { NegativeccmsreportComponent } from './negativeccmsreport/negativeccmsreport.component';
import { SettlementreportComponent } from './settlementreport/settlementreport.component';
import { Tire1reportComponent } from './tire1report/tire1report.component';
import { BireportComponent } from './bireport/bireport.component';
import { DownloadwebreportComponent } from './downloadwebreport/downloadwebreport.component';
import { CustomerrewardingdataComponent } from './customerrewardingdata/customerrewardingdata.component';
import { MandrreportComponent } from './mandrreport/mandrreport.component';
import { DealerearningreportComponent } from './dealerearningreport/dealerearningreport.component';
import { ReportmenuComponent } from './reportmenu/reportmenu.component';



const routes: Routes = [
  
    { path: 'transactionreport' , component :  TransactionwisereportComponent},
    { path: 'dealerreport' , component :  DealerwisereportComponent},
    { path: 'customerreport' , component :  CustomerreportComponent},
    { path: 'customerwisereport' , component :  CustomerwiserewardingComponent},
    { path: 'customerredemption' , component :  CustomerwiseredemptionComponent},
    { path: 'negativeloyalityreport' , component :  NegativeloyalityreportComponent},
    { path: 'negativeccmsreport' , component :  NegativeccmsreportComponent},
    { path: 'settlementreport' , component :  SettlementreportComponent},
    { path: 'tire1report' , component :  Tire1reportComponent},
    { path: 'bireport' , component :  BireportComponent},
    { path: 'webreport' , component :  DownloadwebreportComponent},
    { path: 'customerrewarddata' , component :  CustomerrewardingdataComponent},
    { path: 'mandrreport' , component :  MandrreportComponent},
    { path: 'dealerearningreport' , component :  DealerearningreportComponent},
    { path: 'reportmenu' , component :  ReportmenuComponent},




  {
    path: '',
    redirectTo: '/admin/report/reportmenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class reportRoutingModule {}
