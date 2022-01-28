
import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ExcelService } from 'src/app/services/exportToExcel.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';

@Component({
  selector: 'app-mer-earning-breakup',
  templateUrl: './mer-earning-breakup.component.html',
  styleUrls: ['./mer-earning-breakup.component.css']
})
export class MerEarningBreakupComponent implements OnInit {

  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
  viewEarningBreakupFormGroup:FormGroup;
  private dataArray: any; showSettlementDetails: boolean=false;
    public dataSource: MatTableDataSource<IRandomUsers>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['sno','customer_Id', 'customer_Name', 'earningAmt', 'sale_Amt','slab', 'transactionDate', 'transactionSource', 'transactionType'];
    constructor(private modalService: NgbModal, private adminService: AdminService,
      private fb: FormBuilder,
      @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router,
      private excelService:ExcelService, private merchantService:MerchantService) { }

      get_any_entity_type_list=[];
  ngOnInit(): void {
    this.viewEarningBreakupFormGroup=this.fb.group({
     // merchantid:[''],
     transactiontype:[''],
      fromDate:[(new Date()).toISOString().substring(0, 10)],
      toDate:[(new Date()).toISOString().substring(0, 10)]
    })
    this.getTransactionType();
  }
  exportAsXLSX():void {
    debugger;
    this.excelService.exportAsExcelFile(this.dataArray, 'merchantEarningBreakupReport');
  }
  getTransactionType(){
    let get_any_entity_type_list={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "entitytypegroup": "Merchant Transaction Type"
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
  onSearchButtonClick(){
    this.showSettlementDetails=true;
    debugger;
    let view_merchant_earning_breakupData={
      "merchantid": this.loggedInUserInfoArr.merchant_id,
      "transactiontype": this.viewEarningBreakupFormGroup.controls.transactiontype.value,
      "from_Date": this.viewEarningBreakupFormGroup.controls.fromDate.value,
      "to_Date": this.viewEarningBreakupFormGroup.controls.toDate.value,
      "userid": "1",
      "useragent": "web",
      "userip": "1"
    }
    this.adminService.view_merchant_earning_breakup(view_merchant_earning_breakupData)
      .subscribe(res=>{
        debugger;
        if (res.message.toUpperCase() === 'RECORD FOUND') {

          this.dataArray = res.data;
          this.dataArray=this.dataArray.sort((a, b) => new Date(b.created_on).getTime() - new Date(a.created_on).getTime());
          this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          this.dataSource.paginator = this.paginator;
        }
        else if (res.message.toUpperCase() === 'RECORD NOT FOUND'){
          this.toastr.error("No record found!")
        }
        else if (res.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      });
    
  }
  onResetButtonClick(){
    this.showSettlementDetails=false;
    this.viewEarningBreakupFormGroup.reset();
    this.dataSource = new MatTableDataSource<IRandomUsers>();
    this.dataSource.paginator = this.paginator;
  }

}
