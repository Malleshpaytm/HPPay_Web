import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { IRandomUsers } from '../../location/regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-loyalty-configuration',
  templateUrl: './loyalty-configuration.component.html',
  styleUrls: ['./loyalty-configuration.component.css']
})
export class LoyaltyConfigurationComponent implements OnInit {

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  displayedColumns: string[] = ['slabId','slabname','slabminvalue', 'slabmaxvalue','slabearn_points',
  'slabearn_points_as_per_rs','customertype', 'transactiontype','typeoflogic','actions'];
private dataArray: any;

public dataSource: MatTableDataSource<IRandomUsers>;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private modalService: NgbModal,readonly merchantService:MerchantService,
    private adminService: AdminService, public dialog: MatDialog,private fb:FormBuilder,
    public toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.getAllLoyaltyLogic();
  }
  getAllLoyaltyLogic(){
    let  getAllLoyaltyLogicData = {
     
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.getLoyaltyLogic(getAllLoyaltyLogicData)
    .subscribe(data => {
      if(data.message.toUpperCase()==="RECORD FOUND"){
        this.dataArray = data.data;
        this.GetSaveData = data.data
        //this.dataArray=data.data.sort((a, b) => new Date(b.created_On).getTime() - new Date(a.created_On).getTime());
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
          //this.hotlistData=data.data
          //this.headOfficeDetailsForm.reset();
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.message.toUpperCase()==="RECORD NOT FOUND"){
         this.toastr.error(data.message);
         
       }
    })
  }
  
  onDeleteDistrict(index){
    debugger;
    let recordToBeDeleted=this.GetSaveData[index];
    let delete_loyalty_logicData={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "slabId": recordToBeDeleted.slabId,
  "typeoflogic": recordToBeDeleted.typeoflogic
    }
    this.adminService.delete_loyalty_logic(delete_loyalty_logicData).subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.toastr.success(data.data[0].reason);
        this.getAllLoyaltyLogic();
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
  navigate(item): void {
    debugger
   this.router.navigate(['/admin/addNewLoyalty'], {
     queryParams: {
       
        data: JSON.stringify(item),
        isEdit:true,
        
     }
  });
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
