import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MerChangePasswordPayload } from 'src/app/models/mer-change-password-payload';
import { BaseHttpService } from '../base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private baseHttpService: BaseHttpService) { }

  changeMerchantPassword(changePasswordPayload: MerChangePasswordPayload) {
    const changeMerchantPasswordUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/change_password`;
    return this.baseHttpService.post<any>(changeMerchantPasswordUrl,changePasswordPayload);
  }

  getMerchantDetails(merchantDetailsPayload: any) {
    const getMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/get_merchant`;
    return this.baseHttpService.post<any>(getMerchantDetailsUrl,merchantDetailsPayload).pipe(map(resp => resp.data[0]));
  }

}
