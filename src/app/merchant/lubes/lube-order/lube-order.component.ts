import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { MerchantFsm } from 'src/app/models/merchant-fsm';
import { MerchantFsmDetails } from 'src/app/models/merchant-fsm-details';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { MerchantHelper } from 'src/app/shared/helpers/merchant.helper';
import { User } from 'src/app/shared/Models/user';
@Component({
  selector: 'app-lube-order',
  templateUrl: './lube-order.component.html',
  styleUrls: ['./lube-order.component.css']
})
export class LubeOrderComponent implements OnInit {
  lubeOrderListFormGroup:FormGroup;
 
  get_all_products_by_merchant=[];
  get_any_entity_type_list=[]
  
  isshow: number = 0;
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  displayedColumns: string[] = ['select','orderRefNo','amount','productName', 'qty','transactionid','orderstatus',
  'paymentstatus','orderdate','actions'];
    private dataArray: any;
    private filteredArray: any;
  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
  constructor(
    readonly merchantService: MerchantService,
    readonly toastrService: ToastrService,
    public dialog: MatDialog, private fb: FormBuilder, private router: Router, private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.lubeOrderListFormGroup = this.fb.group({
     
      fromDate:['', Validators.required],
      toDate:['', Validators.required],
      product:[''],
      status:[''],
      comments:['']
    })
    this.getProductListByMerchantId();
    
    this.getLubePurchaseStatus();
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
  onSearchButtonClick(){
    if(this.lubeOrderListFormGroup.valid){
      this.ShowTableList();
    debugger;
    let  get_order_history_by_merchant_idData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "merchant_Id": this.loggedInUserInfoArr.merchant_id,
      "from_Date": this.lubeOrderListFormGroup.controls.fromDate.value,
      "to_Date": this.lubeOrderListFormGroup.controls.toDate.value,
    }
    
    this.merchantService.get_order_history_by_merchant_id(get_order_history_by_merchant_idData)
      .subscribe(data => {
        debugger;
       if(data.message.toUpperCase()==="RECORD FOUND"){
         data.data=data.data.filter(x=>x.product_Name===this.lubeOrderListFormGroup.controls.product.value);
        this.dataArray = data.data;
        
      
        if(this.lubeOrderListFormGroup.controls.status.value=='627002'){
          this.dataArray=data.data.filter(x=>x.order_Status==="Success")
          this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          this.dataSource.paginator = this.paginator;
          if(this.dataArray.length===0){
            this.toastrService.error('No record found!')
          }
          
        }
        
       else if(this.lubeOrderListFormGroup.controls.status.value=='627008'){
        this.dataArray=data.data.filter(x=>x.order_Status==="Pending")
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        if(this.dataArray.length===0){
          this.toastrService.error('No record found!')
        }
       }
       
          //this.GetSavedData=data.data;
          //this.showTableData=true;
          //this.headOfficeDetailsForm.reset();
       }
       else if(data.status_Code===401){
        this.toastrService.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.success===false){
         this.toastrService.error(data.message);
        

         this.dataSource = new MatTableDataSource<IRandomUsers>();
         this.dataSource.paginator = this.paginator;
       }
       
      },
      
      (err: HttpErrorResponse) => {
        this.toastrService.error(err.toString());
      });
    }
    else{
      this.toastrService.error("Please fill all the required fields!")
    }
  }
  onApproveButtonClick(){
    //console.log(this.selection.selected);
    debugger;
    if(this.lubeOrderListFormGroup.controls.comments.value.length>0 && this.selection.selected.length>0){
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
          "remarks": this.lubeOrderListFormGroup.controls.comments.value,
          "useragent": "web",
          "userip": "1",
          "userid": "1"
      }
      this.adminService.update_order_status_by_order_id(update_order_status_by_order_idData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.openDialog("Request(s) approved successfully!")
            this.onSearchButtonClick();
            this.lubeOrderListFormGroup.controls.comments.reset();
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
      this.toastrService.error("Please select the lube order and add comments!")
    }
    
  }
  onRejectButtonClick(){
    debugger;
    if(this.lubeOrderListFormGroup.controls.comments.valid && this.selection.selected.length>0){
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
        "remarks": this.lubeOrderListFormGroup.controls.comments.value,
        "useragent": "web",
        "userip": "1",
        "userid": "1"
    }
    this.adminService.update_order_status_by_order_id(approveRejectMerchantData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          this.openDialog("Request(s) rejected successfully!")
          this.onSearchButtonClick();
          this.lubeOrderListFormGroup.controls.comments.reset();
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
  this.toastrService.error("Please select the request and add comments!")
}
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
  onResetButtonClick(){
    this.isshow=0;
    this.lubeOrderListFormGroup.reset();
  }
  getProductListByMerchantId(){
    let get_all_products_by_merchant={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "category": "Lubes",
      "merchantid": this.loggedInUserInfoArr.merchant_id
    }
    this.merchantService.get_all_products_by_merchant(get_all_products_by_merchant)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.get_all_products_by_merchant=data.data;
       }
      
       
      },
      
      (err: HttpErrorResponse) => {
       // this.toastr.error(err.toString());
      });
  }

  getLubePurchaseStatus(){
    let get_any_entity_type_list={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "entitytypegroup": "Lube Purchase Status"
    }
    this.merchantService.get_any_entity_type_list(get_any_entity_type_list)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.get_any_entity_type_list=data.data;
       }
      
       
      },
      
      (err: HttpErrorResponse) => {
       // this.toastr.error(err.toString());
      });
  }

  ShowTableList() {
    this.isshow = 1;
  }
}

