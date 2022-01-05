import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-regionalofficedetail',
  templateUrl: './regionalofficedetail.component.html',
  styleUrls: ['./regionalofficedetail.component.scss']
})
export class RegionalofficedetailComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['sno', 'regionalOfficeCode',
    'regionalOfficeErpCode', 'regionalShortName', 'regionalOfficeName',
    'zonalOfficeName',
    'actions'
  ];
  private dataArray: any;
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  zonalOffices: Array<any>; regionalOffices: Array<any>
  constructor(private adminService: AdminService, private modalService: NgbModal, private toastr:ToastrService, private router:Router) { }


  ngOnInit(): void {
    this.getRegionalOffices();
    this.getZonalOffices();
  }
  getZonalOffices() {
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
  getRegionalOffices() {
    //get regional office data
    let regionalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getRegionalOffice(regionalOfficeData)
      .subscribe(data => {
        debugger;
        this.regionalOffices = data.data;
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }

  navigate(item): void {
    debugger
   this.router.navigate(['/admin/addeditregionaloffice'], {
     queryParams: {
       isEdit:true,
        data: JSON.stringify(item)
        
     }
  });
 }
  onDeleteRegionalOffice(index) {
    debugger;
    let recordToBeDeleted = this.regionalOffices[index];
    let enableDisableRegionalOfficeData = {
      "rO_Code": recordToBeDeleted.rO_Code,
      "rO_Name":  recordToBeDeleted.rO_Name,
      "rO_Short_Name": recordToBeDeleted.rO_Short_Name,
      "rO_ERP_Code": recordToBeDeleted.rO_ERP_Code,
      "zO_Code": recordToBeDeleted.zO_Code,
      "hO_Code":recordToBeDeleted.hO_Code,
      "district_Code":recordToBeDeleted.district_Code,
      "e_D_Status": 0,
    
      "useragent": "web",
      "userid": "1",
      "userip": "1",
    }
    this.adminService.enableDisableRegionalOffice(enableDisableRegionalOfficeData)
    .subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.toastr.success(data.data[0].reason);
        this.getRegionalOffices();
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    },
    (err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
  onSearchButtonClick(){}
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
export interface IRandomUsers {
  entity_Id: any;
  entity_Type: any;
  net_Amount: any;
  order_Id: any;
  mobile_No: any;
  customer_Id: any;
  customercode:any;
  erpCode: any;
  terminal_id: number;
  merchant_id: number;
  approve_date: string;
  deployment_status: string;
  terminal_status: string;
  mapped_merchant_id: number;
  service_charge: string;
  route_id: string;
  effective_date: string;
  actions: string;
}