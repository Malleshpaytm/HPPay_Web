import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fastagRoutingModule } from './fastag-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { ManagebanklimitComponent } from './request/managebanklimit/managebanklimit.component';
import { BankcreditlimitstatusComponent } from './request/bankcreditlimitstatus/bankcreditlimitstatus.component';
import { StatemenuofaccountComponent } from './financial/statemenuofaccount/statemenuofaccount.component';
import { FastagbankapprovalComponent } from './approval/fastagbankapproval/fastagbankapproval.component';
import { FastagcreditlimitapprovalComponent } from './approval/fastagcreditlimitapproval/fastagcreditlimitapproval.component';
import { RequestcardComponent } from './request/requestcard/requestcard.component';
import { FinancialmenuComponent } from './financial/financialmenu/financialmenu.component';
import { ApprovalmenuComponent } from './approval/approvalmenu/approvalmenu.component';
import { ManagebankenrollmentComponent } from './profile/managebankenrollment/managebankenrollment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';




import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { FastagProfileMenuComponent } from './profile/fastag-profile-menu/fastag-profile-menu.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
   
  
  
    ManagebanklimitComponent,
                BankcreditlimitstatusComponent,
                StatemenuofaccountComponent,
                FastagbankapprovalComponent,
                FastagcreditlimitapprovalComponent,
                RequestcardComponent,
                FinancialmenuComponent,
                ApprovalmenuComponent,
                ManagebankenrollmentComponent,
                FastagProfileMenuComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    fastagRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
})
export class fastagModule {}
