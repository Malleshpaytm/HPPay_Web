import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService, private fb: FormBuilder) { }
 

  ngOnInit(): void {
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
export class ImageDialogModel {

  constructor(public title: string, public message: string) {
  }
}