import { SelectionModel } from '@angular/cdk/collections';
import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';

@Component({
  selector: 'app-verifycustomer',
  templateUrl: './verifycustomer.component.html',
  styleUrls: ['./verifycustomer.component.css']
})
export class VerifycustomerComponent implements OnInit {
  pendingCorporateCustomerFormGroup: FormGroup;
  isshow: number = 0;
  corporateCustomerProfileTableData: any = [];
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  displayedColumns: string[] = ['sno', 'select', 'customerCode', 'companyName',
    'contactPersonName', 'lastName', 'customerType', 'phoneNumber', 'createdBy', 'createdDate', 'viewDetail'];
  private dataArray: any;
  maxNumberOfCharacters = 1000;
  counter = true;
  numberOfCharacters1 = 0;
  numberOfCharacters2 = 0;
  interaction = {
    textValue: ''
  };
  showCorporateCustomerTable = false;
  showVerifiedSuccessInfo: boolean;
  showRejectedInfo: boolean;
  onModelChange(textValue: string): void {
    this.numberOfCharacters2 = textValue.length;
  }
  constructor(@Inject(DOCUMENT) private _document: Document,
    private router: Router, private adminService: AdminService,
    private toastr: ToastrService, private fb: FormBuilder,

    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pendingCorporateCustomerFormGroup = this.fb.group({
      category: ['', Validators.required],
      fromDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
      toDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
      comments: ['']
    })
  }
  searchPendingCorporateCustomer() {
    this.showCorporateCustomerTable = true;
    if (this.pendingCorporateCustomerFormGroup.valid) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      let pendingCorporateCustomerCreationData = {
        "category": this.pendingCorporateCustomerFormGroup.controls.category.value,
        "fromDate": this.pendingCorporateCustomerFormGroup.controls.fromDate.value,
        "toDate": this.pendingCorporateCustomerFormGroup.controls.toDate.value,
        "useragent": "web",
        "userip": "1",
        "userid": userInfo.userid,
      }
      this.adminService.pending_verification_corporate_customer(pendingCorporateCustomerCreationData)
        .subscribe(data => {
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
    this.showCorporateCustomerTable = false;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  onVerifyButtonClick() {
    this.showVerifiedSuccessInfo = true;
    setTimeout(() => {
      this.showVerifiedSuccessInfo = false;
      this.showCorporateCustomerTable = false;
      this.pendingCorporateCustomerFormGroup.reset();
    }, 5000);
    if (this.pendingCorporateCustomerFormGroup.controls.comments.value.length > 0 && this.selection.selected.length > 0) {
      const message = `Are you sure you want to verify this corporate customer(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.selection.selected.forEach(element => {
            let approveRejectMerchantData = {
              "customercode": element.customercode,
              // "comments": this.pendingCorporateCustomerFormGroup.controls.comments.value,
              "status": "Verified",
              "useragent": "web",
              "userip": "1",
              "userid": "1",
              "category": "string",
              "fromDate": "string",
              "toDate": "string"
            }
            this.adminService.verify_corporate_customer(approveRejectMerchantData)
              .subscribe(data => {
                if (data.message.toUpperCase() === 'RECORD FOUND') {
                  this.openDialog("Corporate customer(s) verified successfully!")
                  this.searchPendingCorporateCustomer();
                  this.selection.clear();
                  this.pendingCorporateCustomerFormGroup.controls.comments.reset();
                  // this.merchantTypes = data.data;
                }
                else if (data.status_Code === 401) {
                  this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                  this.router.navigate(['/'])
                }
              }, (err: HttpErrorResponse) => {
                console.log(err)
              })
          });
        }
      })
    }
    else {
      this.toastr.error("Please select the merchant and add comments!")
    }

  }
  onRejectButtonClick() {
    this.showRejectedInfo = true
    setTimeout(() => {
      this.showRejectedInfo = false;
      this.showCorporateCustomerTable = false;
      this.pendingCorporateCustomerFormGroup.reset();
    }, 5000)
    if (this.pendingCorporateCustomerFormGroup.controls.comments.valid && this.selection.selected.length > 0) {
      const message = `Are you sure you want to reject this corporate customer(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.selection.selected.forEach(element => {
            let approveRejectMerchantData = {
              "customercode": element.customercode,
              // "comments": this.pendingCorporateCustomerFormGroup.controls.comments.value,
              "status": "Verification Rejected",
              "useragent": "web",
              "userip": "1",
              "userid": "1"
            }
            this.adminService.verify_corporate_customer(approveRejectMerchantData)
              .subscribe(data => {
                if (data.message.toUpperCase() === 'RECORD FOUND') {
                  this.openDialog("Corporate customer(s) verification rejected successfully!")
                  this.searchPendingCorporateCustomer();
                  this.pendingCorporateCustomerFormGroup.controls.comments.reset();
                  this.selection.clear();
                  // this.merchantTypes = data.data;
                }
                else if (data.status_Code === 401) {

                  this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                  this.router.navigate(['/'])
                }

              }, (err: HttpErrorResponse) => {
                console.log(err)
              })
          });

        }
      })
    }
    else {
      this.toastr.error("Please select the merchant and add comments!")
    }
  }
  openDialog(message): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  viewToKyc(event: any, route): any {
    event.stopPropagation();
    this.router.navigate([route]);
  }


}
