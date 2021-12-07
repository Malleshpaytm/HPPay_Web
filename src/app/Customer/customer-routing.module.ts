import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../Customer/dashboard/dashboard.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { RechargeComponent } from './recharge/recharge.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'statement',
        loadChildren: () =>
          import('./statement/statement.module').then((m) => m.statementModule),
      },
      {
        path: 'money',
        loadChildren: () =>
          import('./add-money/add-money.module').then((m) => m.AddMoneyModule),
      },
      {
        path: 'redemption',
        loadChildren: () =>
          import('./redemption/redemption.module').then((m) => m.RedemptionModule),
      },
      {
        path: 'refer',
        loadChildren: () =>
          import('./refer-earn/refer-earn.module').then((m) => m.ReferModule),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./customer.module').then((m) => m.CustomerModule),
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
