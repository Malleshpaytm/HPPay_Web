import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Customer/header/header.component';
import { FooterComponent } from './Customer/footer/footer.component';
import { ProgramDetailsComponent } from './Customer/program-details/program-details.component';
import { FaqsComponent } from './Customer/faqs/faqs.component';
import { ApplyNowComponent } from './Customer/apply-now/apply-now.component';
import { PageNotFoundComponent } from './Customer/page-not-found/page-not-found.component';
import { HomepageComponent } from './Customer/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RechargeComponent } from './Customer/recharge/recharge.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './services/login/login.service';
import { ApiInterceptorInterceptor } from './shared/interceptor/api-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent, LoginHeaderComponent, LoginFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    //NgbPaginationModule,
  ],
  providers: [AuthenticationService, { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  },
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ApiInterceptorInterceptor,
//     multi: true
// },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
