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
  selector: 'app-mer-mpmr-details',
  templateUrl: './mer-mpmr-details.component.html',
  styleUrls: ['./mer-mpmr-details.component.css']
})
export class MerMpmrDetailsComponent implements OnInit {
  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
  receivablePayableFormGroup:FormGroup;
  private dataArray: any;
    public dataSource: MatTableDataSource<IRandomUsers>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['sno','terminalId', 'batchId', 'settlementDate', 'receivables', 'payables',
    ];
    constructor(private modalService: NgbModal, private adminService: AdminService,
      private fb: FormBuilder,
      @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }

      ngOnInit(): void {
        this.receivablePayableFormGroup=this.fb.group({
          merchantid:[''],
          fromDate:[(new Date()).toISOString().substring(0, 10)],
          toDate:[(new Date()).toISOString().substring(0, 10)]
        })
      }
    
      onSearchButtonClick(){
        debugger;
        let get_receivable_payable_detailsData={
          "merchantid": this.loggedInUserInfoArr.merchant_id,
          "from_Date": this.receivablePayableFormGroup.controls.fromDate.value,
          "to_Date": this.receivablePayableFormGroup.controls.toDate.value,
          "userid": "1",
          "useragent": "web",
          "userip": "1"
        }
        this.adminService.get_receivable_payable_details(get_receivable_payable_detailsData)
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
        this.receivablePayableFormGroup.reset();
        this.dataSource = new MatTableDataSource<IRandomUsers>();
        this.dataSource.paginator = this.paginator;
      }

}
