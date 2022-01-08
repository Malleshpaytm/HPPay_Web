import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-lubedetail',
  templateUrl: './lubedetail.component.html',
  styleUrls: ['./lubedetail.component.css']
})
export class LubedetailComponent implements OnInit {
  GetSavedData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;
  orderDetailsData:any;

  orderId:any;mobileNumber:any;
  constructor(private adminService: AdminService, private fb: FormBuilder,
    private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.orderId = params.orderId;
      this.mobileNumber = params.mobileNumber
    }
    );
    this.getOrderDetails();
   // this.ManageOfficers();
  }
  ManageOfficers() {
    this.GetSavedData = [
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Replacement Rejected",
        "actiondate": "04/06/2021 12:57 PM",
        "actioncomment": "Rejected by SO"
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Replacement Requested",
        "actiondate": "04/06/2021 11:39 AM",
        "actioncomment": "Replacement request by customer"
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Delivered",
        "actiondate": "04/06/2021 11:37 AM",
        "actioncomment": ""
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Dispatched",
        "actiondate": "04/06/2021 11:37 AM",
        "actioncomment": ""
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Successful",
        "actiondate": "04/06/2021 09:00 AM",
        "actioncomment": "Requested by customer"
      }
    ];
  }
  getOrderDetails(){
    debugger;
    let get_order_detail_by_order_idData={
      "order_Id": this.orderId,
      "mobile_No": this.mobileNumber,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.adminService.get_order_detail_by_order_id(get_order_detail_by_order_idData)
      .subscribe(data=>{
        console.log(data.data)
        this.orderDetailsData=data.data[0];
        this.GetSavedData=data.data[0].status_Info
      })
  }
}
