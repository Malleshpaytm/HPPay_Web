import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { IRandomUsers } from '../../admin/location/regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-lubesorderapproval',
  templateUrl: './lubesorderapproval.component.html',
  styleUrls: ['./lubesorderapproval.component.css']
})
export class LubesorderapprovalComponent implements OnInit {
  isshow: number = 0;
  GetSavedData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;
  LubesorderapprovalFormGroup: FormGroup;

  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  // "orderrefnumber": "ORDREF2100000682",
  //       "productname": "Racer 20W 40",
  //       "quantity": 1,
  //       "netamount": "200.00",
  //       "orderstatus": "Replacement Rejected",
  //       "orderdate": "04/06/2021 09:00:00",
  //       "requestdate": "04/06/2021 11:39:44",
  //       "merchantcode": "3319733700"
  displayedColumns: string[] = ['sno','select','merchantcode', 
    'productname','orderId', 'quantity', 'requestdate', 'actions'];
    private dataArray: any;
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
  constructor(private adminService: AdminService, public dialog: MatDialog,private fb:FormBuilder,
    public toastr:ToastrService, private router:Router){}

  ngOnInit(): void {
    this.LubesorderapprovalFormGroup=this.fb.group({
      status:[''],
      fromDate:[''],
      toDate:[''],
      comments:['']
          })
   // this.ManageOfficers();
  }
  ShowTableList() {
    this.isshow = 1;
  }
  searchButtonClick(){
    if(this.LubesorderapprovalFormGroup.valid){
    this.ShowTableList();
    debugger;
    let  get_activate_deactivate_entityData = {
      "status": this.LubesorderapprovalFormGroup.controls.status.value,
      "fromDate": this.LubesorderapprovalFormGroup.controls.fromDate.value,
      "toDate": this.LubesorderapprovalFormGroup.controls.toDate.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    
    this.adminService.get_all_replacement_request(get_activate_deactivate_entityData)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.selection.clear();
          //this.GetSavedData=data.data;
          //this.showTableData=true;
          //this.headOfficeDetailsForm.reset();
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.success===false){
         //this.toastr.error(data.message);
         this.dataSource = new MatTableDataSource<IRandomUsers>();
         this.dataSource.paginator = this.paginator;
         this.selection.clear();
       }
       
      },
      
      (err: HttpErrorResponse) => {
        this.toastr.error(err.toString());
      });
    }
    else{
      this.toastr.error("Please fill all the required fields!")
    }
  }
  onApproveButtonClick(){
    //console.log(this.selection.selected);
    debugger;
    if(this.LubesorderapprovalFormGroup.controls.comments.value.length>0 && this.selection.selected.length>0){
      const message = `Are you sure you want to approve this request(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
      this.selection.selected.forEach(element => {
        let update_order_status_by_order_idData={
          "mobile_No": element.mobile_No.toString().length===12?element.mobile_No.toString().slice(2):element.mobile_No,
          "order_Id": element.order_Id,
          "order_Status": "627008",
          "amount": element.net_Amount,
          "awbNo": "",
          "remarks": this.LubesorderapprovalFormGroup.controls.comments.value,
          "useragent": "web",
          "userip": "1",
          "userid": "1"
      }
      this.adminService.update_order_status_by_order_id(update_order_status_by_order_idData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.openDialog("Request(s) approved successfully!")
            this.searchButtonClick();
            this.LubesorderapprovalFormGroup.controls.comments.reset();
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
      this.toastr.error("Please select the lube order and add comments!")
    }
    
  }
  onRejectButtonClick(){
    debugger;
    if(this.LubesorderapprovalFormGroup.controls.comments.valid && this.selection.selected.length>0){
    const message = `Are you sure you want to reject this request(s)?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
    this.selection.selected.forEach(element => {
      let approveRejectMerchantData={
        "mobile_No": element.mobile_No.toString().length===12?element.mobile_No.toString().slice(2):element.mobile_No,
        "order_Id": element.order_Id,
        "order_Status": "627009",
        "amount": element.net_Amount,
        "awbNo": "",
        "remarks": this.LubesorderapprovalFormGroup.controls.comments.value,
        "useragent": "web",
        "userip": "1",
        "userid": "1"
    }
    this.adminService.update_order_status_by_order_id(approveRejectMerchantData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          this.openDialog("Request(s) rejected successfully!")
          this.searchButtonClick();
          this.LubesorderapprovalFormGroup.controls.comments.reset();
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
  this.toastr.error("Please select the request and add comments!")
}
  }
  Reset() {
    this.isshow = 0;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ManageOfficers() {
    this.GetSavedData = [
      {
        "orderrefnumber": "ORDREF2100000682",
        "productname": "Racer 20W 40",
        "quantity": 1,
        "netamount": "200.00",
        "orderstatus": "Replacement Rejected",
        "orderdate": "04/06/2021 09:00:00",
        "requestdate": "04/06/2021 11:39:44",
        "merchantcode": "3319733700"
      }
    ];
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

  onViewLubesDetails(orderId,mobileNumber): void {
    debugger
   this.router.navigate(['/admin/hplubes/lubedetail'], {
     queryParams: {
      orderId:orderId,
      mobileNumber: mobileNumber
        
     }
  });
 }
}
