import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-verifymerchantprofile',
  templateUrl: './verifymerchantprofile.component.html',
  styleUrls: ['./verifymerchantprofile.component.css']
})
export class VerifymerchantprofileComponent implements OnInit {
  pendingMerchantListFormGroup: FormGroup

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  merchantTypes: Array<any>;
  pendingMerchantListTableData:Array<any>;
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['erpCode', 'RO',
    'retailOutletName', 'type', 'creationDate', 'comments','actions'];
  private dataArray: any;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pendingMerchantListFormGroup = this.fb.group({
      merchantcategory: [''],
      fromDate: [''],
      toDate: [''],
    })
    //merchant type
    let merchantTypeData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getMerchantType(merchantTypeData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          this.merchantTypes = data.data;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      }, (err: HttpErrorResponse) => {
        console.log(err)
      })
  }
  isdisplay() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }
  onSearchButtonClick() {
    debugger;
    let get_approve_merchants_listData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "merchantcategory": this.pendingMerchantListFormGroup.controls.merchantcategory.value,
      "fromDate": this.pendingMerchantListFormGroup.controls.fromDate.value,
      "toDate": this.pendingMerchantListFormGroup.controls.toDate.value,
    }
    this.adminService.get_approve_merchants_list(get_approve_merchants_listData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.pendingMerchantListTableData=data.data;
          this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.message)
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        })
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
