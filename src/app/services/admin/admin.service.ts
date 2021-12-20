import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api_key = this.service.api_key;
  authToken = this.service.authToken;
  //authoken
  constructor(private http: HttpClient, private service:ApiService) { }


  getToken(getTokenData): Observable<any> {
    debugger;
    let path = '/hppay/generatetoken';
    const body=JSON.stringify(getTokenData);
    return this.service.post(path,body);
  }

  refreshToken(){
    let getTokenData ={
     "useragent": "web",
     "userip": "1",
   }
   this.getToken(getTokenData).subscribe(data=>{
     this.authToken=data.token
   })
  }

  //LOCATIONS
  update_head_offices(update_head_officesData): Observable<any> {
    let path = '/hppay/settings/update_head_offices';
    const body=JSON.stringify(update_head_officesData);
    return this.service.post(path,body);
  }
  getStates(getStatesData): Observable<any> {
    let path = '/hppay/settings/get_state';
    const body=JSON.stringify(getStatesData);
    return this.service.post(path,body);
  }

  getZonalOffice(zonalOfficeData): Observable<any> {
    let path = '/hppay/settings/get_zone';
    const body=JSON.stringify(zonalOfficeData);
    return this.service.post(path,body);
  }
  insert_and_update_zone(insert_and_update_zoneData): Observable<any> {
    let path = '/hppay/settings/insert_and_update_zone';
    const body=JSON.stringify(insert_and_update_zoneData);
    return this.service.post(path,body);
  }
  enabled_disabled_zone(enabled_disabled_zoneData): Observable<any> {
    let path = '/hppay/settings/enabled_disabled_zone';
    const body=JSON.stringify(enabled_disabled_zoneData);
    return this.service.post(path,body);
  }
  getHeadOffices(getHeadOfficesData): Observable<any> {
    let path = '/hppay/settings/get_head_offices';
    const body=JSON.stringify(getHeadOfficesData);
    return this.service.post(path,body);
  }
  ///api/hppay/settings/enabled_disabled_zone
  getCity(getCityData): Observable<any> {
    let path = '/hppay/settings/get_city';
    const body=JSON.stringify(getCityData);
    return this.service.post(path,body);
  }

  getRegionalOffice(regionalOfficeData): Observable<any> {
    let path = '/hppay/settings/get_regional_office_details';
    const body=JSON.stringify(regionalOfficeData);
    return this.service.post(path,body);
  }

  getHeadOffice(headOfficeData): Observable<any> {
    let path = '/hppay/settings/get_head_offices';
    const body=JSON.stringify(headOfficeData);
    return this.service.post(path,body);
  }
  getDistrict(getDistrictData): Observable<any> {
    let path = '/hppay/settings/get_district';
    const body=JSON.stringify(getDistrictData);
    return this.service.post(path,body);
  }
  getDistrictByState(getDistrictByStateData): Observable<any> {
    let path = '/hppay/settings/get_district_by_state';
    const body=JSON.stringify(getDistrictByStateData);
    return this.service.post(path,body);
  }
  insert_and_update_regional_office(insert_and_update_regional_officeData): Observable<any> {
    let path = '/hppay/settings/insert_and_update_regional_office';
    const body=JSON.stringify(insert_and_update_regional_officeData);
    return this.service.post(path,body);
  }

  insert_and_update_city(insert_and_update_cityData): Observable<any> {
    let path = '/hppay/settings/insert_and_update_city';
    const body=JSON.stringify(insert_and_update_cityData);
    return this.service.post(path,body);
  }
  insert_and_update_state(insert_and_update_stateData): Observable<any> {
    let path = '/hppay/settings/insert_and_update_state';
    const body=JSON.stringify(insert_and_update_stateData);
    return this.service.post(path,body);
  }
  insert_and_update_district(insert_and_update_districtData): Observable<any> {
    let path = '/hppay/settings/insert_and_update_district';
    const body=JSON.stringify(insert_and_update_districtData);
    return this.service.post(path,body);
  }
  enableDisableRegionalOffice(enableDisableRegionalOfficeData): Observable<any> {
    let path = '/hppay/settings/enabled_disabled_regional_office';
    const body=JSON.stringify(enableDisableRegionalOfficeData);
    return this.service.post(path,body);
  }
  enableDisableState(enableDisableStateData): Observable<any> {
    let path = '/hppay/settings/enabled_disabled_state';
    const body=JSON.stringify(enableDisableStateData);
    return this.service.post(path,body);
  }
  enableDisableDistrict(enableDisableDistrictData): Observable<any> {
    let path = '/hppay/settings/enabled_disabled_district';
    const body=JSON.stringify(enableDisableDistrictData);
    return this.service.post(path,body);
  }
  enableDisableCity(enableDisableCityData): Observable<any> {
    let path = '/hppay/settings/enabled_disabled_city';
    const body=JSON.stringify(enableDisableCityData);
    return this.service.post(path,body);
  }
  getAllRoles(getAllRolesData): Observable<any> {
    let path = '/hppay/settings/get_all_roles';
    const body=JSON.stringify(getAllRolesData);
    return this.service.post(path,body);
  }
  get_all_hqzone_mapping(get_all_hqzone_mappingData): Observable<any> {
    let path = '/hppay/settings/get_all_hqzone_mapping';
    const body=JSON.stringify(get_all_hqzone_mappingData);
    return this.service.post(path,body);
  }
  //CUSTOMER REGISTRATION
  customerRegistration(customerRegistrationData): Observable<any> {
    let path = '/hppay/user/register_new_user_web';
    const body=JSON.stringify(customerRegistrationData);
    return this.service.post(path,body);
  }
  checkMobileNo(checkMobileNoData): Observable<any> {
    let path = '/hppay/login/check_mobileno';
    const body=JSON.stringify(checkMobileNoData);
    return this.service.post(path,body);
  }
  
  updateCustomerProfile(updateCustomerProfileData): Observable<any> {
    let path = '/hppay/user/edit_new_user_web';
    const body=JSON.stringify(updateCustomerProfileData);
    return this.service.post(path,body);
  }

  createManagerRole(createManagerRoleData): Observable<any> {
    let path = '/hppay/user/create_manage_role';
    const body=JSON.stringify(createManagerRoleData);
    return this.service.post(path,body);
  }

  search_user(search_userData): Observable<any> {
    let path = '/hppay/user/search_user';
    const body=JSON.stringify(search_userData);
    return this.service.post(path,body);
  }
  getCustomerProfile(getCustomerProfileData): Observable<any> {
    let path = '/hppay/user/get_profile';
    const body=JSON.stringify(getCustomerProfileData);
    return this.service.post(path,body);
  }


  manageCustomerProfile(manageCustomerProfileData): Observable<any> {
    let path = '/hppay/user/get_profile';
    const body=JSON.stringify(manageCustomerProfileData);
    return this.service.post(path,body);
  }
  getSalesArea(getSalesAreaData): Observable<any> {
    let path = '/hppay/settings/get_sales_area';
    const body=JSON.stringify(getSalesAreaData);
    return this.service.post(path,body);
  }

  viewCcmsRecharge(viewCcmsRechargeData): Observable<any> {
    let path = '/hppay/transaction/view_ccms_recharge';
    const body=JSON.stringify(viewCcmsRechargeData);
    return this.service.post(path,body);
  }

  search_reset_mpin(search_reset_mpinData): Observable<any> {
    let path = '/hppay/login/search_reset_mpin';
    const body=JSON.stringify(search_reset_mpinData);
    return this.service.post(path,body);
  }

  reset_mpin(reset_mpinData): Observable<any> {
    let path = '/hppay/login/reset_mpin';
    const body=JSON.stringify(reset_mpinData);
    return this.service.post(path,body);
  }

  

  //corporate customer
  
  corporateCustomerRegistration(corporateCustomerRegistrationData): Observable<any> {
    let path = '/hppay/registration/add_new_corporate_customer';
    const body=JSON.stringify(corporateCustomerRegistrationData);
    return this.service.post(path,body);
  }
  //MERCHANT APIS

  getMerchantType(getMerchantTypeData): Observable<any> {
    let path = '/hppay/merchant/get_merchant_type';
    const body=JSON.stringify(getMerchantTypeData);
    return this.service.post(path,body);
  }
  createMerchant(createMerchantData): Observable<any> {
    let path = '/hppay/merchant/create_merchant';
    const body=JSON.stringify(createMerchantData);
    return this.service.post(path,body);
  }
  searchMerchant(searchMerchantData): Observable<any> {
    let path = '/hppay/merchant/search_by_merchant';
    const body=JSON.stringify(searchMerchantData);
    return this.service.post(path,body);
  }
  get_approve_merchants_list(get_approve_merchants_listData): Observable<any> {
    let path = '/hppay/merchant/get_approve_merchants_list';
    const body=JSON.stringify(get_approve_merchants_listData);
    return this.service.post(path,body);
  }
  get_rejected_merchants(get_rejected_merchantsData): Observable<any> {
    let path = '/hppay/merchant/get_rejected_merchants';
    const body=JSON.stringify(get_rejected_merchantsData);
    return this.service.post(path,body);
  }
  approveRejectMerchant(approveRejectMerchantData): Observable<any> {
    let path = '/hppay/merchant/approve_merchant';
    const body=JSON.stringify(approveRejectMerchantData);
    return this.service.post(path,body);
  }
  searchMerchantByMerchantId(searchMerchantByMerchantIdData): Observable<any> {
    let path = '/hppay/merchant/get_merchant';
    const body=JSON.stringify(searchMerchantByMerchantIdData);
    return this.service.post(path,body);
  }
//merchant financials

settlement_details_by_merchant(settlement_details_by_merchantData): Observable<any> {
  let path = '/hppay/transaction/settlement_details_by_merchant';
  const body=JSON.stringify(settlement_details_by_merchantData);
  return this.service.post(path,body);
}
transactionDetailsByMerchant(transactionDetailsByMerchantData): Observable<any> {
  let path = '/hppay/transaction/get_transaction_detail_by_merchantid ';
  const body=JSON.stringify(transactionDetailsByMerchantData);
  return this.service.post(path,body);
}
get_receivable_payable_details(get_receivable_payable_detailsData): Observable<any> {
  let path = '/hppay/transaction/get_receivable_payable_details ';
  const body=JSON.stringify(get_receivable_payable_detailsData);
  return this.service.post(path,body);
}

get_erp_reload_sale_earnings(get_erp_reload_sale_earningsData): Observable<any> {
  let path = '/hppay/transaction/get_erp_reload_sale_earnings';
  const body=JSON.stringify(get_erp_reload_sale_earningsData);
  return this.service.post(path,body);
}

get_merchant_account_statement(get_merchant_account_statementData): Observable<any> {
  let path = '/hppay/wallet/get_merchant_account_statement';
  const body=JSON.stringify(get_merchant_account_statementData);
  return this.service.post(path,body);
}
view_merchant_earning_breakup(view_merchant_earning_breakupData): Observable<any> {
  let path = '/hppay/transaction/view_merchant_earning_breakup';
  const body=JSON.stringify(view_merchant_earning_breakupData);
  return this.service.post(path,body);
}
daywise_merchant_earning_data(daywise_merchant_earning_dataData): Observable<any> {
  let path = '/hppay/transaction/daywise_merchant_earning_data';
  const body=JSON.stringify(daywise_merchant_earning_dataData);
  return this.service.post(path,body);
}

//merchant requests
get_allowed_products_for_merchant(get_allowed_products_for_merchantData): Observable<any> {
  let path = '/hppay/merchant/get_allowed_products_for_merchant';
  const body=JSON.stringify(get_allowed_products_for_merchantData);
  return this.service.post(path,body);
}



  // Interface --> EFT Reccharge API(S)
  request_ccms_recharge_through_eft(request_ccms_recharge_through_eftData): Observable<any> {
    let path = '/hppay/wallet/request_ccms_recharge_through_eft';
    const body=JSON.stringify(request_ccms_recharge_through_eftData);
    return this.service.post(path,body);
  }
  get_pending_ccms_recharge_through_eft(get_pending_ccms_recharge_through_eftData): Observable<any> {
    let path = '/hppay/wallet/get_pending_ccms_recharge_through_eft';
    const body=JSON.stringify(get_pending_ccms_recharge_through_eftData);
    return this.service.post(path,body);
  }
  approve_pending_ccms_recharge_through_eft(approve_pending_ccms_recharge_through_eftData): Observable<any> {
    let path = '/hppay/wallet/approve_pending_ccms_recharge_through_eft';
    const body=JSON.stringify(approve_pending_ccms_recharge_through_eftData);
    return this.service.post(path,body);
  }
  request_ccms_recharge_reversal_through_eft(request_ccms_recharge_reversal_through_eftData): Observable<any> {
    let path = '/hppay/wallet/request_ccms_recharge_reversal_through_eft';
    const body=JSON.stringify(request_ccms_recharge_reversal_through_eftData);
    return this.service.post(path,body);
  }
  get_pending_ccms_recharge_reverse_through_eft(get_pending_ccms_recharge_reverse_through_eftData): Observable<any> {
    let path = '/hppay/wallet/get_pending_ccms_recharge_reverse_through_eft';
    const body=JSON.stringify(get_pending_ccms_recharge_reverse_through_eftData);
    return this.service.post(path,body);
  }
  approve_pending_ccms_recharge_reversalthrough_eft(approve_pending_ccms_recharge_reversalthrough_eftData): Observable<any> {
    let path = '/hppay/wallet/approve_pending_ccms_recharge_reversalthrough_eft';
    const body=JSON.stringify(approve_pending_ccms_recharge_reversalthrough_eftData);
    return this.service.post(path,body);
  }
  get_all_ccms_recharge_through_eft(get_all_ccms_recharge_through_eftData): Observable<any> {
    let path = '/hppay/wallet/get_all_ccms_recharge_through_eft';
    const body=JSON.stringify(get_all_ccms_recharge_through_eftData);
    return this.service.post(path,body);
  }
  //financials
  get_user_wallet_balance(get_user_wallet_balanceData): Observable<any> {
    let path = '/hppay/wallet/get_user_wallet_balance';
    const body=JSON.stringify(get_user_wallet_balanceData);
    return this.service.post(path,body);
  }

  activate_deactivate_entity(get_user_wallet_balanceData): Observable<any> {
    let path = '/dtplus/settings/activate_deactivate_entity';
    const body=JSON.stringify(get_user_wallet_balanceData);
    return this.service.post(path,body);
  }

}
