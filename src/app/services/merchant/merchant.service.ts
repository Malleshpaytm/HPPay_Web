import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MerChangePasswordPayload } from 'src/app/models/mer-change-password-payload';
import { MerchantDetails } from 'src/app/models/merchant-details';
import { MerchantFsm } from 'src/app/models/merchant-fsm';
import { MerchantFsmDetails } from 'src/app/models/merchant-fsm-details';
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

  updateMerchantDetails(merchantDetailsPayload: MerchantDetails) {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/update_merchant`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl,merchantDetailsPayload);
  }

  getMerchantFsmList(payload: any): Observable<MerchantFsm[]> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/get_merchant_fsm_mapping_list`;
    return this.baseHttpService.post<MerchantFsm[]>(updateMerchantDetailsUrl, payload).pipe(map((resp : any) => resp.data));
  }

  saveMerchantFsm(merchantFsmPayload: MerchantFsmDetails): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/save_merchant_fsm_mapping`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, merchantFsmPayload);
  }

  generateMerchantFsmQr(payload: MerchantFsm): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/generate_qr_merchant_fsm`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, payload);
  }

  //lubes
  get_all_products_by_merchant( get_all_products_by_merchant): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/lubes/get_all_products_by_merchant`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, get_all_products_by_merchant);
  }

  get_any_entity_type_list( get_any_entity_type_list): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/settings/get_any_entity_type_list`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, get_any_entity_type_list);
  }

  get_order_history_by_merchant_id(get_order_history_by_merchant_id): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/lubes/get_order_history_by_merchant_id`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, get_order_history_by_merchant_id);
  }
  block_merchant_fsm(block_merchant_fsm): Observable<any> {
    const updateMerchantDetailsUrl = `${this.baseHttpService.hpPayApiRoot}api/hppay/merchant/block_merchant_fsm`;
    return this.baseHttpService.post<any>(updateMerchantDetailsUrl, block_merchant_fsm);
  }
  ///api/hppay/merchant/block_merchant_fsm

  
}
