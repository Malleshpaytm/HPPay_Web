import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [PanelMenuModule, DropdownModule, PanelModule, TableModule, CalendarModule],
  exports: [PanelMenuModule, DropdownModule, PanelModule, TableModule, CalendarModule],
})
export class PrimengModule {}
