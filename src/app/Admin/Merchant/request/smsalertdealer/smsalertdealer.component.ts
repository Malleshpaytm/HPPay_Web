import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-smsalertdealer',
  templateUrl: './smsalertdealer.component.html',
  styleUrls: ['./smsalertdealer.component.css']
})
export class SmsalertdealerComponent implements OnInit {

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  smsAlertDealerFormGroup:FormGroup;
  merchantProfile:any;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, 
    private adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.smsAlertDealerFormGroup=this.fb.group({
      merchantid:['']
    })
  }

  getMerchantDetails(){
    debugger;
    let searchMerchantByMerchantIdData={
      "merchantid": this.smsAlertDealerFormGroup.controls.merchantid.value,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.adminService.searchMerchantByMerchantId(searchMerchantByMerchantIdData)
      .subscribe(data=>{
        console.log(data.data);
        this.ShowTableList();
        this.merchantProfile=data.data[0];
      })
  }

  onSubmitButtonClick(){
    
  }

  ShowTableList(){
    this.isshow=1;
 }
 Reset(){
   this.isshow=0;
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
