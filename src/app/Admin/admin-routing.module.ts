import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'HPPayCustomer',
        loadChildren: () =>
          import('./HPPayCustomer/hppay.module').then((m) => m.hppayModule),
      },
      {
        path: 'merchant',
        loadChildren: () =>
          import('./Merchant/merchant.module').then((m) => m.merchantModule),
      },
      {
        path: 'interface',
        loadChildren: () =>
          import('./Interface/interface.module').then((m) => m.interfaceModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./Report/report.module').then((m) => m.reportModule),
      },
      {
        path: 'download',
        loadChildren: () =>
          import('./Download/download.module').then((m) => m.downloadModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./Search/search.module').then((m) => m.searchModule),
      },
      {
        path: 'corporatecustomer',
        loadChildren: () =>
          import('./corporatecustomer/corporatecustomer.module').then((m) => m.corporateModule),
      },
      {
        path: 'hplubes',
        loadChildren: () =>
          import('./hplubes/hplubes.module').then((m) => m.hplubesModule),
      },
      {
        path: 'fastag',
        loadChildren: () =>
          import('./fastag/fastag.module').then((m) => m.fastagModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
