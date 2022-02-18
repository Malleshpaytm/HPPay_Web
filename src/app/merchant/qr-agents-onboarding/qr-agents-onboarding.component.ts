import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MerchantFsm } from 'src/app/models/merchant-fsm';
import { MerchantFsmDetails } from 'src/app/models/merchant-fsm-details';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { MerchantHelper } from 'src/app/shared/helpers/merchant.helper';

@Component({
  selector: 'app-qr-agents-onboarding',
  templateUrl: './qr-agents-onboarding.component.html',
  styleUrls: ['./qr-agents-onboarding.component.css'],
})
export class QrAgentsOnboardingComponent implements OnInit {
  fsmList: MerchantFsm[];
  isBeingAdded = false;
  newMerchantFsm: MerchantFsmDetails;
  showQrCode = false;
  qrCode: string;
  selectedMerchantFsm: MerchantFsm;
  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)

  constructor(
    readonly merchantService: MerchantService,
    readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.populateMerchantFsmList();
  }
  populateMerchantFsmList() {
    this.merchantService
      .getMerchantFsmList(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((list) => {
        this.fsmList = list;
      });
  }

  handleFsmSave() {
    this.merchantService
      .saveMerchantFsm(
        MerchantHelper.addMerchantMetadataToModels(this.newMerchantFsm)
      )
      .subscribe(() => {
        this.toastrService.success('Fsm Created Successfully');
        this.populateMerchantFsmList();
        this.isBeingAdded = false;
      });
  }

  handleAddFsm() {
    this.newMerchantFsm = new MerchantFsmDetails();
    this.isBeingAdded = true;
  }

  handleGenerateQr(merchantFsm: MerchantFsm) {
    debugger;
    this.selectedMerchantFsm = merchantFsm;
    this.merchantService
      .generateMerchantFsmQr(
        MerchantHelper.addMerchantMetadataToModels(merchantFsm)
      )
      .subscribe((resp) => {
        this.showQrCode = true;
        debugger;
        this.qrCode = resp.data[0].qRcode;
      });
  }

  blockFsm(fsMmobileno){
    debugger;
    let blockFsmData={
      "merchantid": this.loggedInUserInfoArr.merchant_id,
  "fsMmobileno": fsMmobileno,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.merchantService.block_merchant_fsm(blockFsmData)
    .subscribe(data => {
      debugger;
     if(data.message.toUpperCase()==="RECORD FOUND"){
      this.toastrService.success(data.data[0].reason);
      this.populateMerchantFsmList();
     }
    
     
    },
    
    (err: HttpErrorResponse) => {
     // this.toastr.error(err.toString());
    });
  }
}
