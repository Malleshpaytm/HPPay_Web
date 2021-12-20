import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-managehppaycustomer',
  templateUrl: './managehppaycustomer.component.html',
  styleUrls: ['./managehppaycustomer.component.css']
})
export class ManagehppaycustomerComponent implements OnInit {


  allChecked = false;
  //DataList: DatatoList[] = [];
  manageCustomerProfileTableData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  manageProfileFormGroup: FormGroup;
  constructor(private modalService: NgbModal, private adminService: AdminService, private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document,private toastr: ToastrService,private router:Router,) { }

  ngOnInit(): void {
    this.manageProfileFormGroup = this.fb.group({
      mobileNumber: ['']
    })
  }

  searchManageCustomerProfile() {
    debugger;
    if(this.manageProfileFormGroup.controls.mobileNumber.value.length>0){
      let manageCustomerProfileData = {
        "mobile_number_or_userid": this.manageProfileFormGroup.controls.mobileNumber.value,
        "useragent": "web",
        "userip": "1",
        "userid": "1",
  
      }
      this.adminService.manageCustomerProfile(manageCustomerProfileData).subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.manageCustomerProfileTableData = data.data;
          this.isshow = 1;
        }
        else if(data.status_Code===401){
          // 
          this.adminService.refreshToken();
         // this._document.defaultView.location.reload();
        }
        else{
          this.toastr.error(data.message)
        }
      }, (err: HttpErrorResponse) => {
        console.log(err)
      })
    }
   else{
     this.toastr.error("Please fill the details!")
   }
  }



  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
    this.manageProfileFormGroup.reset();
   
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
