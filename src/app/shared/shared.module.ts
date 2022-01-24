import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ConfirmDialogComponent } from './confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CardComponent, ConfirmDialogComponent, DialogBoxComponent, ImageDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardComponent, ConfirmDialogComponent],
})
export class SharedModule {}
