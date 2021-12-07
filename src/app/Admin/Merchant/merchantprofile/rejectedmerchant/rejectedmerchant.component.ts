import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-rejectedmerchant',
  templateUrl: './rejectedmerchant.component.html',
  styleUrls: ['./rejectedmerchant.component.css']
})
export class RejectedmerchantComponent implements OnInit {



  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  rejectedMerchantListFormGroup: FormGroup;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.rejectedMerchantListFormGroup = this.fb.group({
      fromDate: [''],
      toDate: [''],
    })
  }
  onSearchButtonCLick() {
    debugger;
    let get_rejected_merchantsData = {
      "fromDate": this.rejectedMerchantListFormGroup.controls.fromDate.value,
      "toDate": this.rejectedMerchantListFormGroup.controls.toDate.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.get_rejected_merchants(get_rejected_merchantsData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          //this.merchantTypes = data.data;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      },
       (err: HttpErrorResponse) => {
        console.log(err)
      })
  }
  isdisplay() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }

  GetManageUserData() {
    this.GetSaveData = [
      {
        "slno": 1,
        "officerid": 1,
        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno": 2,
        "officerid": 1,

        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno": 3,
        "officerid": 1,

        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      }
    ];
  }

  limitChange(limit: number) {

  }
  toggleCheckAll() {
    this.setList(this.allChecked);
  }
  setList(checkAll: boolean) {
    // this.DataList.forEach((c: DatatoList) => {
    //   c.isChecked = checkAll;
    //});
  }
  setAllChecked() {
    //return this.fgSystemList.filter((c: FgSystemToList) => c.isChecked === true).length === this.fgSystemList.length;
  }

}
