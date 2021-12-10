import { Injectable } from '@angular/core';
import { MerChangePasswordPayload } from 'src/app/models/mer-change-password-payload';
import { BaseHttpService } from '../base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private baseHttpService: BaseHttpService) { }

  changeMerchantPassword(changePasswordPayload: MerChangePasswordPayload) {
    const changeMerchantPasswordUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/change_password`;
    return this.baseHttpService.post(changeMerchantPasswordUrl,changePasswordPayload);
  }

}
