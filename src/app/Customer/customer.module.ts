import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './header/header.component';
import { CustomerHeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RechargeComponent } from './recharge/recharge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomerHeaderComponent,
    FooterComponent,
    ProgramDetailsComponent,
    FaqsComponent,
    ApplyNowComponent,
    HomepageComponent,
    RechargeComponent,
    DashboardComponent,
    SideNavComponent,
    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CustomerModule {}
