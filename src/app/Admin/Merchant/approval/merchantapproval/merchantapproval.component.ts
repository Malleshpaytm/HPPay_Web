import { SelectionModel } from '@angular/cdk/collections';
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
import { MerchantDetailsModalComponent } from '../../merchant-details-modal/merchant-details-modal.component';

@Component({
  selector: 'app-merchantapproval',
  templateUrl: './merchantapproval.component.html',
  styleUrls: ['./merchantapproval.component.css']
})
export class MerchantapprovalComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  displayedColumns: string[] = ['sno','select','erpCode', 'RO',
    'retailOutletName','city', 'type', 'creationDate', 'actions'];
  private dataArray: any;
  merchantTypes: Array<any>;
  approveMerchantListFormGroup:FormGroup;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, 
    private adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) { }
  coloredRow:boolean[]=[];
  maxNumberOfCharacters = 1000;
 counter = true;
 numberOfCharacters1 = 0;
 numberOfCharacters2 = 0;
 interaction = {
   textValue: ''
 };
 recordToBeApprovedOrRejected=[];
 onModelChange(textValue: string): void {
  this.numberOfCharacters2 = textValue.length;
}
//   changeColor(index)
//     {
//       debugger;
//       //this.recordToBeApprovedOrRejected.pop()
//       this.coloredRow[index] =!this.coloredRow[index];
//       // this.dataArray.forEach(element => {
//       //   if()
//       // });
//       if(!this.coloredRow[index]){
//         //const index: number = this.dataArray.indexOf(this.recordToBeApprovedOrRejected);
//       //   if (index !== -1) {
//       //     this.recordToBeApprovedOrRejected.splice(index, 1);
//       // } 
//         this.recordToBeApprovedOrRejected.splice(this.recordToBeApprovedOrRejected[index],1)
//         //this.recordToBeApprovedOrRejected = [...new Set(this.recordToBeApprovedOrRejected)];
//       }
//       else{
//         this.recordToBeApprovedOrRejected.push(this.dataArray[index])
//       }
    
// console.log(this.recordToBeApprovedOrRejected)
//     }
  ngOnInit(): void {
    this.approveMerchantListFormGroup = this.fb.group({
      merchantcategory: [''],
      fromDate: [(new Date()).toISOString().substring(0, 10)],
      toDate: [(new Date()).toISOString().substring(0, 10)],
      comments:['']
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
      this.approveMerchantListFormGroup.controls.merchantcategory.setValue('COCO')
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
          this.dataSource = new MatTableDataSource<IRandomUsers>();
          this.dataSource.paginator = this.paginator;
         // this.toastr.error(data.message)
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        })
  }
  onApproveButtonClick(){
    //console.log(this.selection.selected);
    debugger;
    if(this.approveMerchantListFormGroup.controls.comments.value.length>0 && this.selection.selected.length>0){
      const message = `Are you sure you want to approve this merchant(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
      this.selection.selected.forEach(element => {
        let approveRejectMerchantData={
          "merchant_Id": element.erpCode,
          "comments": this.approveMerchantListFormGroup.controls.comments.value,
          "status": "Approved",
          "useragent": "web",
          "userip": "1",
          "userid": "1"
      }
      this.adminService.approveRejectMerchant(approveRejectMerchantData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.openDialog("Merchant(s) approved successfully!")
            this.onSearchButtonClick();
            this.approveMerchantListFormGroup.controls.comments.reset();
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
    }})
    }
    else{
      this.toastr.error("Please select the merchant and add comments!")
    }
    
  }
  onRejectButtonClick(){
    debugger;
    if(this.approveMerchantListFormGroup.controls.comments.valid && this.selection.selected.length>0){
    const message = `Are you sure you want to reject this merchant(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
    this.selection.selected.forEach(element => {
      let approveRejectMerchantData={
        "merchant_Id": element.erpCode,
        "comments": this.approveMerchantListFormGroup.controls.comments.value,
        "status": "UnApproved",
        "useragent": "web",
        "userip": "1",
        "userid": "1"
    }
    this.adminService.approveRejectMerchant(approveRejectMerchantData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          this.openDialog("Merchant(s) rejected successfully!")
          this.onSearchButtonClick();
          this.approveMerchantListFormGroup.controls.comments.reset();
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
   
  }})
}
else{
  this.toastr.error("Please select the merchant and add comments!")
}
  }
  onViewMerchantDetails(merchantid): void {
    let dialogRef = this.dialog.open(MerchantDetailsModalComponent, {
      width: '900px',
      data: { merchantid:merchantid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
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
  call() {
    console.log(this.selection.selected);
  }
  Reset(){
    this.approveMerchantListFormGroup.reset()
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
}
