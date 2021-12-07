import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditzonaloffice',
  templateUrl: './addeditzonaloffice.component.html',
  styleUrls: ['./addeditzonaloffice.component.scss']
})
export class AddeditzonalofficeComponent implements OnInit {
  updateZonalOfficeFormGroup: FormGroup;
  statesDropdownValues:Array<any>
  constructor( private fb: FormBuilder,public adminService:AdminService,private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.updateZonalOfficeFormGroup = this.fb.group({
      zO_Code: [''],
      zO_Name: [''],
      zO_Short_Name: [''],
      zO_ERP_Code: [],
      state_Id: [''],
      e_D_Status: ['']
    });
    this.getState();
  }
  getState() {
    debugger;
    let stateData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getStates(stateData)
      .subscribe(data => {
        debugger;
        this.statesDropdownValues = data.data;
      },
      
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
 

}
