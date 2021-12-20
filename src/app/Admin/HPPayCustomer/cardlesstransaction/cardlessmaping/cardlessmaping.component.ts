import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-cardlessmaping',
  templateUrl: './cardlessmaping.component.html',
  styleUrls: ['./cardlessmaping.component.css']
})
export class CardlessmapingComponent implements OnInit {
  closeResult: string | undefined;
  resetMpinFormGroup:FormGroup;
  customerResetMpinDetails:any;
  showSearchResult:boolean;
  constructor(private modalService: NgbModal, private adminService: AdminService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.resetMpinFormGroup=this.fb.group({
      mobileNo:['']
    })
  }
  onSearchButtonClick(){
    debugger;
    let search_reset_mpinData={
      "mobileNo": this.resetMpinFormGroup.controls.mobileNo.value,
      "username": "",
      "userid": "1", 
      "useragent": "web",
      "userip": "1"
    }
    this.adminService.search_reset_mpin(search_reset_mpinData)
      .subscribe(res=>{
        debugger;
        if (res.message.toUpperCase() === 'RECORD FOUND') {
          this.showSearchResult=true;
this.customerResetMpinDetails=res.data[0];
        
        }
        else if (res.message.toUpperCase() === 'RECORD NOT FOUND'){
          this.toastr.error("No record found!")
        }
        else if (res.status_Code === 401) {
          //this.loginService.generateToken();
        }
      });
    
  }

  resetMpinClick(){
    debugger;
    let reset_mpinData={
      "mobileNo": this.resetMpinFormGroup.controls.mobileNo.value,
      "username": "",
      "userid": "1", 
      "useragent": "web",
      "userip": "1"
    }
    this.adminService.reset_mpin(reset_mpinData)
      .subscribe(res=>{
        debugger;
        if (res.message.toUpperCase() === 'RECORD FOUND') {
         this.openDialog(res.data[0].reason)

        
        }
        else if (res.message.toUpperCase() === 'RECORD NOT FOUND'){
          this.toastr.error("No record found!")
        }
        else if (res.status_Code === 401) {
          //this.loginService.generateToken();
        }
      });
  }
  Reset(){
    this.showSearchResult=false;
   this.resetMpinFormGroup.reset();
 }
 open(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openDialog(message): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Reset();
      //this.animal = result;
    });
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


