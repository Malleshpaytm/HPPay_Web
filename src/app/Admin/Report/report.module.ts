import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { reportRoutingModule } from './report-routing.module';
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

@NgModule({
  declarations: [
   
  
    TransactionwisereportComponent,
            DealerwisereportComponent,
            CustomerreportComponent,
            CustomerwiserewardingComponent,
            CustomerwiseredemptionComponent,
            NegativeloyalityreportComponent,
            NegativeccmsreportComponent,
            SettlementreportComponent,
            Tire1reportComponent,
            BireportComponent,
            DownloadwebreportComponent,
            CustomerrewardingdataComponent,
            MandrreportComponent,
            DealerearningreportComponent,
            ReportmenuComponent
  ],
  imports: [
    CommonModule,
    reportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class reportModule {}
