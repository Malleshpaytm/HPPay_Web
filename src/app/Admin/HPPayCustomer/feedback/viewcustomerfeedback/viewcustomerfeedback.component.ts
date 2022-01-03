import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-viewcustomerfeedback',
  templateUrl: './viewcustomerfeedback.component.html',
  styleUrls: ['./viewcustomerfeedback.component.css']
})
export class ViewcustomerfeedbackComponent implements OnInit {

  
  
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  viewAndCloseCustomerFeedbackFormGroup:FormGroup;
  constructor(private adminService: AdminService, public dialog: MatDialog,private fb:FormBuilder,
    public toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.viewAndCloseCustomerFeedbackFormGroup=this.fb.group({
      fromDate:[''],
      toDate:[''],
      category:['']
    })
   
  }
  ShowTableList(){
    this.isshow=1;
 }
 Reset(){
   this.isshow=0;
   this.viewAndCloseCustomerFeedbackFormGroup.reset();
 }
 onSearchButtonClick(){
  debugger;
  this.ShowTableList();
  //this.GetManageUserData();
  let get_all_feedback_listData={
    "fromDate": this.viewAndCloseCustomerFeedbackFormGroup.controls.fromDate.value,
    "toDate": this.viewAndCloseCustomerFeedbackFormGroup.controls.toDate.value,
    "category": this.viewAndCloseCustomerFeedbackFormGroup.controls.category.value?this.viewAndCloseCustomerFeedbackFormGroup.controls.category.value:"",
"useragent": "web",
"userip": "1",
"userid": "1"
  }
  this.adminService.get_all_feedback_list(get_all_feedback_listData)
    .subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.GetSaveData=data.data;
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    },
    (err:HttpErrorResponse)=>{
      console.log(err)
    })
 }

  GetManageUserData() {
    this.GetSaveData = [
      {
        "slno":1,
        "officerid": 1,
        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno":2,
        "officerid": 1,

        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno":3,
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
