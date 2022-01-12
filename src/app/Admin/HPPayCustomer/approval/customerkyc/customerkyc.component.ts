import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { CustomerDetailsModalComponent } from '../../customer-details-modal/customer-details-modal.component';

@Component({
  selector: 'app-customerkyc',
  templateUrl: './customerkyc.component.html',
  styleUrls: ['./customerkyc.component.css'],
  providers: [DatePipe]
})
export class CustomerkycComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'select', 'customer_Id', 'mobile_No', 'created_On', 'poa','viewDetails'];
  private dataArray: any;

  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  maxNumberOfCharacters = 1000;
  counter = true;
  numberOfCharacters1 = 0;
  numberOfCharacters2 = 0;
  interaction = {
    textValue: ''
  };
  recordToBeApprovedOrRejected = [];
  //
  onModelChange(textValue: string): void {
    this.numberOfCharacters2 = textValue.length;
  }
  customerkycformgroup: FormGroup;
  constructor(private adminService: AdminService, public dialog: MatDialog, private fb: FormBuilder,
    public toastr: ToastrService, private router: Router, private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.customerkycformgroup = this.fb.group({
      category: [''],
      email: [''],
      mobileno: [''],
      from_Date: [(new Date()).toISOString().substring(0, 10)],
      to_Date: [(new Date()).toISOString().substring(0, 10)],
      comments: ['']
    });
    debugger;

    this.onSearchButtonClick(0);
  }

  onSearchPendingKycUsers() {
    if (this.customerkycformgroup.controls.email.value) {
      this.onSearchButtonClick(1)
    }
    else if (this.customerkycformgroup.controls.mobileno.value) {
      this.onSearchButtonClick(2)
    }
    else if (this.customerkycformgroup.controls.from_Date.value && this.customerkycformgroup.controls.to_Date.value) {
      this.onSearchButtonClick(3)
    }
    else if (this.customerkycformgroup.controls.from_Date.value && this.customerkycformgroup.controls.to_Date.value
      && this.customerkycformgroup.controls.mobileno.value && this.customerkycformgroup.controls.email.value) {
      this.onSearchButtonClick(4)
    }
    else if (this.customerkycformgroup.controls.from_Date.value && this.customerkycformgroup.controls.to_Date.value
      && this.customerkycformgroup.controls.mobileno.value) {
      this.onSearchButtonClick(5)
    }
    else if (this.customerkycformgroup.controls.from_Date.value && this.customerkycformgroup.controls.to_Date.value
      && this.customerkycformgroup.controls.email.value) {
      this.onSearchButtonClick(6)
    }
    else {
      this.onSearchButtonClick(0)
    }
  }
  onSearchButtonClick(category) {
    debugger;

    let get_pending_kycData = {
      "category": category,
      "email": this.customerkycformgroup.controls.email.value,
      "mobileno": this.customerkycformgroup.controls.mobileno.value,
      "from_Date": this.customerkycformgroup.controls.from_Date.value,
      "to_Date": this.customerkycformgroup.controls.to_Date.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.get_pending_kyc(get_pending_kycData)
      .subscribe(data => {
        if (data.message.toUpperCase() === "RECORD FOUND") {
          //this.dataArray = data.data;

          this.dataArray = data.data.sort((a, b) => new Date(b.created_On).getTime() - new Date(a.created_On).getTime());
          this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          this.dataSource.paginator = this.paginator;
          //this.hotlistData=data.data
          //this.headOfficeDetailsForm.reset();
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else if (data.message.toUpperCase() === "RECORD NOT FOUND") {
          this.toastr.error(data.message);
          this.selection.clear();
        }

      },

        (err: HttpErrorResponse) => {
          this.toastr.error(err.toString());
        });
  }


  onViewCustomerDetails(customerid): void {
    debugger;
    let dialogRef = this.dialog.open(CustomerDetailsModalComponent, {
      width: '900px',
      data: { customerid:customerid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  onApproveButtonClick() {
    //console.log(this.selection.selected);
    debugger;
    if (this.customerkycformgroup.controls.comments.value.length > 0 && this.selection.selected.length > 0) {
      const message = `Are you sure you want to approve this customer(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.selection.selected.forEach(element => {
            let approve_kycData = {
              "customer_Id": element.customer_Id,
              "mobileno": element.mobile_No.toString().length === 12 ? element.mobile_No.toString().slice(2) : element.mobile_No,
              "comments": this.customerkycformgroup.controls.comments.value,
              "status": "1",
              "useragent": "web",
              "userip": "1",
              "userid": "1"
            }
            this.adminService.approve_kyc(approve_kycData)
              .subscribe(data => {
                if (data.message.toUpperCase() === 'RECORD FOUND') {
                  debugger;
                  this.openDialog("Customer(s) approved successfully!")
                  this.onSearchButtonClick(0);
                  this.customerkycformgroup.controls.comments.reset();
                  // this.merchantTypes = data.data;
                }
                else if (data.status_Code === 401) {
                  this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                  this.router.navigate(['/'])
                }
                else {
                  this.toastr.error(data.data[0].reason)
                }
              }, (err: HttpErrorResponse) => {
                console.log(err)
              })
          });
        }
      })
    }
    else {
      this.toastr.error("Please select the customer and add comments!")
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
  onRejectButtonClick() {
    debugger;
    if (this.customerkycformgroup.controls.comments.valid && this.selection.selected.length > 0) {
      const message = `Are you sure you want to reject this customer(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.selection.selected.forEach(element => {
            let approve_kycData = {
              "customer_Id": element.customer_Id,
              "mobileno": element.mobile_No,
              "comments": this.customerkycformgroup.controls.comments.value,
              "status": "2",
              "useragent": "web",
              "userip": "1",
              "userid": "1"
            }
            this.adminService.approve_kyc(approve_kycData)
              .subscribe(data => {
                if (data.message.toUpperCase() === 'RECORD FOUND') {
                  debugger;
                  this.openDialog("Customer(s) rejected successfully!")
                  this.onSearchButtonClick(0);
                  this.customerkycformgroup.controls.comments.reset();
                  // this.merchantTypes = data.data;
                }
                else if (data.status_Code === 401) {
                  //this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                  //this.router.navigate(['/'])
                }
              }, (err: HttpErrorResponse) => {
                console.log(err)
              })
          });

        }
      })
    }
    else {
      this.toastr.error("Please select the customer and add comments!")
    }
  }
  onImageClick(url) {
    debugger;
    window.open(url, '_blank');
  }
  GetManageUserData() {
    this.GetSaveData = [
      {
        "customerid": 1,
        "customername": "Suman",

        "email": "suman@gmail.com",
        "createddate": "6 June 2021",
        "proofofidentity": "adhar.jpg",
        "addressproof": "adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",

        "email": "suman@gmail.com",
        "createddate": "6 June 2021",
        "proofofidentity": "adhar.jpg",
        "addressproof": "adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",

        "email": "suman@gmail.com",
        "createddate": "6 June 2021",
        "proofofidentity": "adhar.jpg",
        "addressproof": "adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",

        "email": "suman@gmail.com",
        "createddate": "6 June 2021",
        "proofofidentity": "adhar.jpg",
        "addressproof": "adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      }
    ];
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
  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
    this.customerkycformgroup.reset();
    this.dataSource = new MatTableDataSource<IRandomUsers>();
    this.dataSource.paginator = this.paginator;
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
