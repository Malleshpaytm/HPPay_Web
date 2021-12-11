import { selectOptions , selectActionOptions, selectReasonOptions} from '@const/hotListConstant';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormGroup, FormControl  } from '@angular/forms';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hotlistreactive',
  templateUrl: './hotlistreactive.component.html',
  styleUrls: ['./hotlistreactive.component.css'],
})
export class HotlistreactiveComponent implements OnInit {
  showBody: boolean = false;
  entityTypeValue: string = '';
  hotListFormGroup: FormGroup;
  selectOptions: any;
  selectActionOptions: any;
  selectReasonOptions: any;
  entityTypeName: string= '';
  constructor(private adminService: AdminService, public dialog: MatDialog) {
    this.selectOptions= selectOptions;
    this.selectActionOptions= selectActionOptions;
    this.selectReasonOptions= selectReasonOptions;

  }



  onApplyButtonClick() {
    const message = `Are you sure you want to do this?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {

    // TODO: Use EventEmitter with form value
      console.warn(this.hotListFormGroup.value);
      this.adminService.activate_deactivate_entity(this.hotListFormGroup.value).subscribe(data=>
      {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: { message: "success" }
          });
        }
        else if(data.status_Code===401){
          //
          this.adminService.refreshToken();
          // this._document.defaultView.location.reload();
        }
        else{
          this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: { message: data.reasonPhrase }
          });
        }
      });
    }});
  }

  ngOnInit(): void {
    this.hotListFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    entity_Type: new FormControl(''),
    entity_Id: new FormControl(''),
    action: new FormControl(''),
    reason: new FormControl(''),
    remarks: new FormControl(''),
    report_Check_Status: new FormControl(''),
    from_Date: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear() + 1))),
    to_Date: new FormControl(new Date()),
    useragent: new FormControl('web'),
    userip: new FormControl('1'),
    userid:new FormControl('1'),
  });
  this.hotListFormGroup.controls['entity_Type'].setValue("select", {onlySelf: true});

  }

  entityChange(e: any): void {
    debugger;
    this.entityTypeValue = e.target.value;
    this.entityTypeName = this.entityTypeValue=== 'Merchant'? "Merchant ID":"Mobile Number";
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
  }
  resetValue(): void {
    this.entityTypeValue = '';
    this.showBody = false;
  }
}
