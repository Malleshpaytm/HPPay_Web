import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Customer/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './auth/admin.guard';
import { CustomerGuard } from './auth/customer.guard';
import { MerchantGuard } from './auth/merchant.guard';
const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'customer',
    canActivate: [CustomerGuard],
    loadChildren: () =>
      import('./Customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'merchant',
    canActivate: [MerchantGuard],
    loadChildren: () =>
      import('./merchant/merchant.module').then((m) => m.MerchantModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
