import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantDetailsModalComponent } from '../../merchant-details-modal/merchant-details-modal.component';

@Component({
  selector: 'app-merchant-creation-view',
  templateUrl: './merchant-creation-view.component.html',
  styleUrls: ['./merchant-creation-view.component.css']
})
export class MerchantCreationViewComponent implements OnInit {

  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['sno','erpCode', 'RO',
    'retailOutletName', 'type', 'status', 'actions'];
  private dataArray: any;
  merchantTypes: Array<any>;
  merchantCreationViewFormGroup:FormGroup;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, 
    private adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) { }
  coloredRow:boolean[]=[];
 counter = true;
 
 recordToBeApprovedOrRejected=[];
 

  ngOnInit(): void {
    this.merchantCreationViewFormGroup = this.fb.group({
      status: [''],
    })

    
  }
  onSearchButtonClick() {
    debugger;
    let searchMerchantData = {
      "useragent": "web",
          "userip": "1",
          "userid": "1",
        "merchantid": 0,
        "erpCode": "",
        "outlet_name": "",
        "city": "",
        "highway_No": "",
        "status": this.merchantCreationViewFormGroup.controls.status.value
      }
    this.adminService.searchMerchant(searchMerchantData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          //this.pendingMerchantListTableData=data.data;
          this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.dataSource = new MatTableDataSource<IRandomUsers>();
          this.dataSource.paginator = this.paginator;
         // this.toastr.error(data.message)
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        })
  }
  onViewMerchantDetails(merchantid): void {
    debugger;
    let dialogRef = this.dialog.open(MerchantDetailsModalComponent, {
      width: '900px',
      data: { merchantid:merchantid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
