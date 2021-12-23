import { SelectionModel } from '@angular/cdk/collections';
import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrls: ['./managecustomer.component.css']
})
export class ManagecustomerComponent implements OnInit {
  pendingCorporateCustomerFormGroup: FormGroup;
  constructor(@Inject(DOCUMENT) private _document: Document,
    private router: Router, private adminService: AdminService,
    private toastr: ToastrService, private fb: FormBuilder,

    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog) { }
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  displayedColumns: string[] = ['sno', 'customerCode', 'companyName',
    'contactPersonName', 'lastName', 'customerType', 'phoneNumber', 'createdBy', 'createdDate', 'viewDetail', 'editDetail'];
  private dataArray: any;
  ngOnInit(): void {
    this.pendingCorporateCustomerFormGroup = this.fb.group({
      category: ['', Validators.required],
      fromDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
      toDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
      comments: ['']
    })
  }
  searchPendingCorporateCustomer() {
    if (this.pendingCorporateCustomerFormGroup.valid) {
      let pendingCorporateCustomerCreationData = {

        "category": this.pendingCorporateCustomerFormGroup.controls.category.value,
        "fromDate": this.pendingCorporateCustomerFormGroup.controls.fromDate.value,
        "toDate": this.pendingCorporateCustomerFormGroup.controls.toDate.value,
        "useragent": "web",
        "userip": "1",
        "userid": "1",
      }
      this.adminService.pending_verification_corporate_customer(pendingCorporateCustomerCreationData)
        .subscribe(data => {
          debugger;
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            // this.corporateCustomerProfileTableData = data.data;
            //   this.isshow = 1;
            this.dataArray = data.data;
            this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
            this.dataSource.paginator = this.paginator;
          }

          else if (data.status_Code === 401) {
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            this.router.navigate(['/']);
            //this._document.defaultView.location.reload();
          }
          else if (data.message.toUpperCase() === 'RECORD NOT FOUND') {

            this.dataSource = new MatTableDataSource<IRandomUsers>();
            this.dataSource.paginator = this.paginator;
          }
          else {
            this.toastr.error(data.message)
          }

        },
          (err: HttpErrorResponse) => {
            console.log(err)
          })
    }
    else {
      this.toastr.error("Please fill all the required fields!")
    }

  }
  Reset() {
    this.dataSource = new MatTableDataSource<IRandomUsers>();
    this.dataSource.paginator = this.paginator;
    this.pendingCorporateCustomerFormGroup.reset();
  }
}
