import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEdit:boolean;
  zonalOfficeInfo:any;
  constructor( private fb: FormBuilder,public adminService:AdminService,private toastr:ToastrService, private router:Router,
    private route: ActivatedRoute) { }

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
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.zonalOfficeInfo=params.data;
      this.isEdit=params.isEdit
    }
    );
    if(this.isEdit=true){
      this.zonalOfficeInfo=JSON.parse(this.zonalOfficeInfo);
      this.updateZonalOfficeFormGroup.controls.zO_Code.setValue(this.zonalOfficeInfo.zone_Code);
      this.updateZonalOfficeFormGroup.controls.zO_ERP_Code.setValue(this.zonalOfficeInfo.zone_ERPcode);
     // this.updateZonalOfficeFormGroup.controls.state_Id.setValue(this.zonalOfficeInfo.zone_ERPcode);
this.updateZonalOfficeFormGroup.controls.zO_Short_Name.setValue(this.zonalOfficeInfo.zone_Short_Name);
this.updateZonalOfficeFormGroup.controls.zO_Name.setValue(this.zonalOfficeInfo.zone_Name)
    }
   // console.log(history.state);
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
 onSaveButtonClick(){
   let addUpdateZonalOffice={
    "zO_Code": this.updateZonalOfficeFormGroup.controls.zO_Code.value,
    "zO_Name": this.updateZonalOfficeFormGroup.controls.zO_Name.value,
    "zO_Short_Name":this.updateZonalOfficeFormGroup.controls.zO_Short_Name.value,
    "zO_ERP_Code": this.updateZonalOfficeFormGroup.controls.zO_ERP_Code.value,
    "state_Id": this.updateZonalOfficeFormGroup.controls.state_Id.value,
    "e_D_Status": 0,
    "useragent": "web",
    "userip": "1",
    "userid": "1"
  }
  this.adminService.insert_and_update_zone(addUpdateZonalOffice)
    .subscribe(data=>{
      if(data.message.toUpperCase()==="RECORD FOUND"){
        this.toastr.success(data.data[0].reason);
        this.updateZonalOfficeFormGroup.reset();
     }
     else if(data.status_Code===401){
      this.adminService.refreshToken()
    }
     else if(data.message.toUpperCase()==="RECORD NOT FOUND"){
       this.toastr.error(data.data[0].reason)
     }
    })
 }

}
