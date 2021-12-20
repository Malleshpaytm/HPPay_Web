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
  selector: 'app-merchantdaywiseearningview',
  templateUrl: './merchantdaywiseearningview.component.html',
  styleUrls: ['./merchantdaywiseearningview.component.css']
})
export class MerchantdaywiseearningviewComponent implements OnInit {

  dayWiseMerchantEarningDataFormGroup:FormGroup;
  private dataArray: any;
    public dataSource: MatTableDataSource<IRandomUsers>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['sno','terminalId', 'batchId', 'settlementDate', 'receivables', 'payables',
    ];
    constructor(private modalService: NgbModal, private adminService: AdminService,
      private fb: FormBuilder,
      @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.dayWiseMerchantEarningDataFormGroup=this.fb.group({
      merchantid:[''],
      fromDate:[(new Date()).toISOString().substring(0, 10)],
      toDate:[(new Date()).toISOString().substring(0, 10)]
    })
  }
  onSearchButtonClick(){
    debugger;
    let daywise_merchant_earning_dataData={
      "merchantid": this.dayWiseMerchantEarningDataFormGroup.controls.merchantid.value,
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
          this.dataArray=this.dataArray.sort((a, b) => new Date(b.created_on).getTime() - new Date(a.created_on).getTime());
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
