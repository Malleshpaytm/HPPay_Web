import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ManagebanklimitComponent } from './request/managebanklimit/managebanklimit.component';
import { BankcreditlimitstatusComponent } from './request/bankcreditlimitstatus/bankcreditlimitstatus.component';
import { StatemenuofaccountComponent } from './financial/statemenuofaccount/statemenuofaccount.component';
import { FastagbankapprovalComponent } from './approval/fastagbankapproval/fastagbankapproval.component';
import { FastagcreditlimitapprovalComponent } from './approval/fastagcreditlimitapproval/fastagcreditlimitapproval.component';
import { RequestcardComponent } from './request/requestcard/requestcard.component';
import { FinancialmenuComponent } from './financial/financialmenu/financialmenu.component';
import { ApprovalmenuComponent } from './approval/approvalmenu/approvalmenu.component';
import { ManagebankenrollmentComponent } from './profile/managebankenrollment/managebankenrollment.component';


const routes: Routes = [
    { path: 'managebanklimit', component: ManagebanklimitComponent },
    { path: 'bankcreditlimit', component: BankcreditlimitstatusComponent },
    { path: 'statementofaccount', component: StatemenuofaccountComponent },
    { path: 'fastagbankapproval', component: FastagbankapprovalComponent },
    { path: 'fastagcreditlimitapproval', component: FastagcreditlimitapprovalComponent },
    { path: 'requestcard', component: RequestcardComponent },
    { path: 'financialcard', component: FinancialmenuComponent },
    { path: 'approvalmenu', component: ApprovalmenuComponent },
    { path: 'managebankenrolment', component: ManagebankenrollmentComponent },
  {
    path: '',
    redirectTo: '/admin/fastag/fastagmenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class fastagRoutingModule {}
