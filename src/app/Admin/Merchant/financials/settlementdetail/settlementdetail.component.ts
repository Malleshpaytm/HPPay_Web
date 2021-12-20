import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-settlementdetail',
  templateUrl: './settlementdetail.component.html',
  styleUrls: ['./settlementdetail.component.css']
})
export class SettlementdetailComponent implements OnInit {
  settlementDetailsFormGroup:FormGroup;
  searchTrasactionsTableData: any;
  showSettlementDetails: boolean;
  constructor(private modalService: NgbModal, private adminService: AdminService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.settlementDetailsFormGroup=this.fb.group({
      merchantId:[''],
      fromDate:[''],
      toDate:['']
    })
  }
  onSearchButtonClick(){
    let searchTrasactionsData =
      {
        "merchantid": this.settlementDetailsFormGroup.controls['merchantId'].value,
        "from_Date": this.settlementDetailsFormGroup.controls['fromDate'].value,
        "to_Date": this.settlementDetailsFormGroup.controls['toDate'].value,
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }

      this.adminService.settlement_details_by_merchant(searchTrasactionsData)
        .subscribe(data => {
          debugger;
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            this.searchTrasactionsTableData = data.data;
            this.showSettlementDetails = true;
          }
        });
  }
  Reset(){
    this.settlementDetailsFormGroup.reset();
    this.showSettlementDetails=false;
  }
}
