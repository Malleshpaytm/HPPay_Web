import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-viewhotlistedreactivated',
  templateUrl: './viewhotlistedreactivated.component.html',
  styleUrls: ['./viewhotlistedreactivated.component.css'],
})
export class ViewhotlistedreactivatedComponent implements OnInit {
  showBody: boolean = false;
  showTableData: boolean = false;
  entityTypeValue: string = '';
 
 
  viewHotlistReactiveFormGroup: FormGroup;
  hotlistData: Array<any>
  constructor(private adminService: AdminService, public dialog: MatDialog, private fb: FormBuilder,
    public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.viewHotlistReactiveFormGroup = this.fb.group({
      entityType: [''],
      entityId: ['']
    })
  }

  entityChange(e: any): void {
    this.entityTypeValue = e.target.value;
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
  }

  onGetHotlistData() {
    debugger;
    //if(this.headOfficeDetailsForm.valid){
    let get_activate_deactivate_entityData = {
      "entity_Type": this.viewHotlistReactiveFormGroup.controls.entityType.value,
      "entity_Id": this.viewHotlistReactiveFormGroup.controls.entityId.value,
      "report_Check_Status": 0,
      "from_Date": "",
      "to_Date": "",
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }

    this.adminService.get_activate_deactivate_entity(get_activate_deactivate_entityData)
      .subscribe(data => {
        if (data.message.toUpperCase() === "RECORD FOUND") {
          this.hotlistData = data.data;
          this.showTableData = true;
          //this.headOfficeDetailsForm.reset();
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else if (data.message.toUpperCase() === "RECORD NOT FOUND") {
          this.toastr.error(data.message)
        }

      },

        (err: HttpErrorResponse) => {
          this.toastr.error(err.toString());
        });
    // }
    // else{
    //   this.toastr.error("Please fill all the necessary details!")
    // }
  }
  resetValue(): void {
    this.entityTypeValue = '';
    this.showBody = false;
    this.viewHotlistReactiveFormGroup.reset();
    this.showTableData = false;
  }
}
