import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ConfirmDialogComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [CardComponent, ConfirmDialogComponent],
  imports: [CommonModule],
  exports: [CardComponent, ConfirmDialogComponent],
})
export class SharedModule {}
