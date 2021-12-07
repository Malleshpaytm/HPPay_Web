import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-vieweftrechargerequest',
  templateUrl: './vieweftrechargerequest.component.html',
  styleUrls: ['./vieweftrechargerequest.component.css']
})
export class VieweftrechargerequestComponent implements OnInit {
  isshow: number = 0;
  GetSavedData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;
  VieweftrechargerequestFormGroup: FormGroup;
  pendingEftRequestsTableData: Array<any>;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.VieweftrechargerequestFormGroup = this.fb.group({
      Status: [''],
      mobile_No: [''],
      from_Date: [''],
      to_Date: [''],
    })
  }
  onSearchButtonClick() {
    debugger;
    let get_all_ccms_recharge_through_eftData = {
      "Status": this.VieweftrechargerequestFormGroup.controls.Status.value,
      "mobile_No": this.VieweftrechargerequestFormGroup.controls.mobile_No.value,
      "from_Date":  this.VieweftrechargerequestFormGroup.controls.from_Date.value,
      "to_Date":  this.VieweftrechargerequestFormGroup.controls.to_Date.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1"

    }
    this.adminService.get_all_ccms_recharge_through_eft(get_all_ccms_recharge_through_eftData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          //this.pendingEftRequestsAllData = data.data;
          this.pendingEftRequestsTableData = data.data.customer;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.data[0].reason)
        }
       },
       (err: HttpErrorResponse) => {
        console.log(err)

      })
  }
  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }
  ManageOfficers() {

  }

}
