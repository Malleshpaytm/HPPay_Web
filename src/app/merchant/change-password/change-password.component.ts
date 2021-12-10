import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MerChangePasswordPayload } from 'src/app/models/mer-change-password-payload';
import { MerchantService } from 'src/app/services/merchant/merchant.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordModel: MerChangePasswordPayload;
  confirmedPassword: string;
  isValidState = true;
  constructor(private merchantService: MerchantService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.changePasswordModel = new MerChangePasswordPayload();
    this.changePasswordModel.merchantId = 3090000002;

  }

  handleSubmit() {
    if (this.isValid()) {
      this.merchantService.changeMerchantPassword(this.changePasswordModel).subscribe(_ => {
        console.log(_);
      });
    }
  }

  isValid() {
    if (
      !this.changePasswordModel.newpassword ||
      !this.changePasswordModel.oldpassword ||
      !this.confirmedPassword
    ) {
      this.toastrService.error('Please provide valid password.')
      return false;
    }
    if (this.changePasswordModel.newpassword !== this.confirmedPassword) {
      this.toastrService.error('Passwords do not match.');
      return false;
    }
    return true;
  }

  handleConfirmPasswordChange(confirmedPassword) {
    this.confirmedPassword = confirmedPassword;
    this.isValid();
  }
}
