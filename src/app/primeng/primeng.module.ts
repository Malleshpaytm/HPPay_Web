import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [PanelMenuModule, DropdownModule, PanelModule],
  exports: [PanelMenuModule, DropdownModule, PanelModule],
})
export class PrimengModule {}
