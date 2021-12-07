import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { downloadRoutingModule } from './download-routing.module';
import { DownloadmenuComponent } from './downloadmenu/downloadmenu.component';
import { AdvancedownloadComponent } from './advancedownload/advancedownload.component';

@NgModule({
  declarations: [
   
  
    DownloadmenuComponent,
            AdvancedownloadComponent
  ],
  imports: [
    CommonModule,
    downloadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
  ],
})
export class downloadModule {}
