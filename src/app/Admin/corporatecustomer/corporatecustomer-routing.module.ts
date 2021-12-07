import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ProfilemenuComponent } from './profile/profilemenu/profilemenu.component';
import { AddcustomerComponent } from './profile/addcustomer/addcustomer.component';
import { VerifycustomerComponent } from './profile/verifycustomer/verifycustomer.component';
import { ManagecustomerComponent } from './profile/managecustomer/managecustomer.component';
import { CustomerbonusmenuComponent } from './customerbonus/customerbonusmenu/customerbonusmenu.component';
import { ManagecustomerbonusComponent } from './customerbonus/managecustomerbonus/managecustomerbonus.component';
import { AddcustomerbonusComponent } from './customerbonus/addcustomerbonus/addcustomerbonus.component';
import { ApprovecustomerbonusComponent } from './customerbonus/approvecustomerbonus/approvecustomerbonus.component';
import { AuthorizecustomerbonusComponent } from './customerbonus/authorizecustomerbonus/authorizecustomerbonus.component';

const routes: Routes = [

 { path: 'profilemenu' , component : ProfilemenuComponent },
 { path: 'addcustomer' , component : AddcustomerComponent },
 { path: 'verifycustomer' , component : VerifycustomerComponent },
 { path: 'managecustomer' , component : ManagecustomerComponent },
 { path: 'customerbonusmenu' , component: CustomerbonusmenuComponent },
 { path: 'managecustomerbonus' , component : ManagecustomerbonusComponent },
 { path: 'addcustomerbonus' , component: AddcustomerbonusComponent },
 { path: 'approvecustomerbonus' , component:  ApprovecustomerbonusComponent},
 { path: 'authorizecustomerbonus' ,  component : AuthorizecustomerbonusComponent },
  
  {
    path: '',
    redirectTo: '/admin/corporatecustomer/profilemenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class corporateRoutingModule {}
