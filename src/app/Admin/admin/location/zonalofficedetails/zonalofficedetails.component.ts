import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-zonalofficedetails',
  templateUrl: './zonalofficedetails.component.html',
  styleUrls: ['./zonalofficedetails.component.scss']
})
export class ZonalofficedetailsComponent implements OnInit {

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  paginateData: any[] = [];
  collectionSize=0;
  public page: number = 1;
  public pageSize: number = 2;
  zonalOffices:Array<any>;
  constructor(private modalService: NgbModal, public adminService:AdminService, private route: ActivatedRoute ,
     private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    debugger
   this.getZonalOffice();
  
  }
  getZonalOffice(){
    let zonalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getZonalOffice(zonalOfficeData)
      .subscribe(data => {
        debugger;
        this.zonalOffices = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  getPremiumData(){
    
    this.paginateData =  this.zonalOffices
     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
     
   }
   navigate(item): void {
     debugger
    this.router.navigate(['/admin/addeditzonaloffice'], {
      queryParams: {
        isEdit:true,
         data: JSON.stringify(item)
         
      }
   });
  }
  onDeleteZone(index) {
    debugger;
    let recordToBeDeleted = this.zonalOffices[index];
    let enableDisableCityData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "zO_Code": recordToBeDeleted.zone_Code,
      "zO_Name":recordToBeDeleted.zone_Name,
      "zO_Short_Name": recordToBeDeleted.zone_Short_Name,
      "zO_ERP_Code": recordToBeDeleted.zone_ERPcode,
      "state_Id": recordToBeDeleted.state_Id,
      "e_D_Status": 0
    }
    this.adminService.enabled_disabled_zone(enableDisableCityData)
    .subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.toastr.success(data.data[0].reason);
        this.getZonalOffice()
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    })
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
