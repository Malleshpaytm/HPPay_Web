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
  selector: 'app-merchantapproval',
  templateUrl: './merchantapproval.component.html',
  styleUrls: ['./merchantapproval.component.css']
})
export class MerchantapprovalComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['erpCode', 'RO',
    'retailOutletName', 'type', 'creationDate', 'comments','actions'];
  private dataArray: any;
  merchantTypes: Array<any>;
  approveMerchantListFormGroup:FormGroup;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.approveMerchantListFormGroup = this.fb.group({
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
  onSearchButtonClick() {
    debugger;
    let get_approve_merchants_listData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "merchantcategory": this.approveMerchantListFormGroup.controls.merchantcategory.value,
      "fromDate": this.approveMerchantListFormGroup.controls.fromDate.value,
      "toDate": this.approveMerchantListFormGroup.controls.toDate.value,
    }
    this.adminService.get_approve_merchants_list(get_approve_merchants_listData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          //this.pendingMerchantListTableData=data.data;
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
}
