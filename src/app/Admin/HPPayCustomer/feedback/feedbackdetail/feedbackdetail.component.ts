import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRandomUsers } from 'src/app/Admin/admin/location/regionalofficedetail/regionalofficedetail.component';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-feedbackdetail',
  templateUrl: './feedbackdetail.component.html',
  styleUrls: ['./feedbackdetail.component.css']
})
export class FeedbackdetailComponent implements OnInit {
  mobileNo=''; date='';
  GetSaveData: any = [];
  private dataArray: any;
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno','Qsname', 'Ans'];
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, 
    private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.mobileNo = params.mobileNo;
      this.date = params.date
    }
    );
    this.onSearchButtonClick();
  }
  onSearchButtonClick(){
    debugger;
    let get_feedback_response_detailData={
      "feedback_Date": this.date,
  "mobile_No": this.mobileNo,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.adminService.get_feedback_response_detail(get_feedback_response_detailData)
      .subscribe(data=>{
        if(data.message.toUpperCase()==='RECORD FOUND'){
          this.GetSaveData=data.data[0].feedback_Answers.Feedback_Answers;
          this.dataArray = data.data[0].feedback_Answers.Feedback_Answers;
          this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          this.dataSource.paginator = this.paginator;
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
}
