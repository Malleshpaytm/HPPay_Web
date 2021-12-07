import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { searchRoutingModule } from './search-routing.module';
import { SearchmenuComponent } from './searchmenu/searchmenu.component';
import { SearchparamrterComponent } from './searchparamrter/searchparamrter.component';
import { ResultparameterComponent } from './resultparameter/resultparameter.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';

@NgModule({
  declarations: [
   
  
    SearchmenuComponent,
            SearchparamrterComponent,
            ResultparameterComponent,
            AdminsearchComponent
  ],
  imports: [
    CommonModule,
    searchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class searchModule {}
