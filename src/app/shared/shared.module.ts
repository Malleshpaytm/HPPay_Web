import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ConfirmDialogComponent } from './confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [CardComponent, ConfirmDialogComponent, DialogBoxComponent],
  imports: [CommonModule],
  exports: [CardComponent, ConfirmDialogComponent],
})
export class SharedModule {}
