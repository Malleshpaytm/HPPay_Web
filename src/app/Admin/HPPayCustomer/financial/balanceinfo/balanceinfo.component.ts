import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-balanceinfo',
  templateUrl: './balanceinfo.component.html',
  styleUrls: ['./balanceinfo.component.css']
})
export class BalanceinfoComponent implements OnInit {
  balanceInfoFormGroup:FormGroup;
  balanceTableData:any;
  showTable = false;
  constructor(private modalService: NgbModal, private adminService: AdminService, private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document,private toastr: ToastrService,private router:Router,) { }

  ngOnInit(): void {
    this.balanceInfoFormGroup=this.fb.group({
mobileNo:['']
    })
  }
  closeResult: string | undefined;
 Reset(){
  this.showTable = false;
  this.balanceInfoFormGroup.reset();
 }
 open(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  onSearchButtonClick() {
    debugger;
    let get_user_wallet_balanceData = {
      "user_mobile_or_userid": this.balanceInfoFormGroup.controls.mobileNo.value,
      "userid": "1",
      "useragent": "web",
      "userip": "1"

    }
    this.adminService.get_user_wallet_balance(get_user_wallet_balanceData).subscribe(data => {
      if (data.message.toUpperCase() === 'RECORD FOUND') {
         this.balanceTableData = data.data;
         this.showTable = true;
      }
      else if(data.status_Code===401){
        // 
        this.adminService.refreshToken();
       // this._document.defaultView.location.reload();
      }
      else{
        this.showTable = false;
        this.toastr.error(data.message)
      }
    }, (err: HttpErrorResponse) => {
      console.log(err)
    })
  } 


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
}
