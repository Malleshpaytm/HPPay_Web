import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-productmapping',
  templateUrl: './productmapping.component.html',
  styleUrls: ['./productmapping.component.css']
})
export class ProductmappingComponent implements OnInit {

  merchantProductMappingFormGroup:FormGroup;
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;

  constructor(private modalService: NgbModal, private adminService: AdminService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.merchantProductMappingFormGroup=this.fb.group({
      merchantid:[''],
    })
  }
onSearchButtonClick(){
  debugger;
  let get_allowed_products_for_merchantData={
    "merchantid": this.merchantProductMappingFormGroup.controls.merchantid.value,
    "userid": "1",
    "useragent": "web",
    "userip": "1"
  }
  this.adminService.get_allowed_products_for_merchant(get_allowed_products_for_merchantData)
    .subscribe(res=>{
      debugger;
      if (res.message.toUpperCase() === 'RECORD FOUND') {
       // this.isshow=1;
     
      }
      else if (res.message.toUpperCase() === 'RECORD NOT FOUND'){
        this.toastr.error("No record found!")
      }
      else if (res.status_Code === 401) {
        //this.loginService.generateToken();
      }
    });
}
  GetManageUserData() {
    this.GetSaveData = [
      {
        "customerid": "SMS On Cash Reload",
        

      },
      {
        "customerid": "SMS On CCMS Recharge",
        

      },
      {
        "customerid": "SMS On Dealer Sattlement",
        

      }

    ];
  }

  ShowTableList(){
   
 }
 Reset(){
   this.isshow=0;
   this.merchantProductMappingFormGroup.reset();
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
