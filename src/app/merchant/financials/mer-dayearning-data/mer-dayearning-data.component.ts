import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-mer-dayearning-data',
  templateUrl: './mer-dayearning-data.component.html',
  styleUrls: ['./mer-dayearning-data.component.css']
})
export class MerDayearningDataComponent implements OnInit {
  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
  dayWiseMerchantEarningDataFormGroup:FormGroup;
  private dataArray: any;
    public dataSource: MatTableDataSource<IRandomUsers>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['sno','earningAmt', 'postingDate', 'transactionDate'];
    constructor(private modalService: NgbModal, private adminService: AdminService,
      private fb: FormBuilder,
      @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.dayWiseMerchantEarningDataFormGroup=this.fb.group({
     // merchantid:[''],
      fromDate:[(new Date()).toISOString().substring(0, 10)],
      toDate:[(new Date()).toISOString().substring(0, 10)]
    })
  }
  onSearchButtonClick(){
    debugger;
    let daywise_merchant_earning_dataData={
      "merchantid": this.loggedInUserInfoArr.merchant_id,
      "from_Date": this.dayWiseMerchantEarningDataFormGroup.controls.fromDate.value,
      "to_Date": this.dayWiseMerchantEarningDataFormGroup.controls.toDate.value,
      "userid": "1",
      "useragent": "web",
      "userip": "1"
    }
    this.adminService.daywise_merchant_earning_data(daywise_merchant_earning_dataData)
      .subscribe(res=>{
        debugger;
        if (res.message.toUpperCase() === 'RECORD FOUND') {

          this.dataArray = res.data;
          this.dataArray=this.dataArray.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
          this.dataArray=this.dataArray.sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
          this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          this.dataSource.paginator = this.paginator;
        }
        else if (res.message.toUpperCase() === 'RECORD NOT FOUND'){
          this.toastr.error("No record found!")
        }
        else if (res.status_Code === 401) {
          //this.loginService.generateToken();
        }
      });
    
  }
  onResetButtonClick(){
    this.dayWiseMerchantEarningDataFormGroup.reset();
    this.dataSource = new MatTableDataSource<IRandomUsers>();
    this.dataSource.paginator = this.paginator;
  }
}
