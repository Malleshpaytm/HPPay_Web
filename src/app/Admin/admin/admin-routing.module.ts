import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ManageuserComponent } from './manageuser/manageuser/manageuser.component';
import { AdduserComponent } from './manageuser/adduser/adduser.component';
import { ManagerolelistComponent } from './managerole/managerolelist/managerolelist.component';
import { MenulistComponent } from './hotlisting/menulist/menulist.component';
import { HotlistreactiveComponent } from './hotlisting/hotlistreactive/hotlistreactive.component';
import { HotlistapprovalComponent } from './hotlisting/hotlistapproval/hotlistapproval.component';
import { BulkhotlistComponent } from './hotlisting/bulkhotlist/bulkhotlist.component';
import { ViewhotlistedreactivatedComponent } from './hotlisting/viewhotlistedreactivated/viewhotlistedreactivated.component';
import { SecurityComponent } from './security/security.component';
import { HeadquarterofficeComponent } from './location/headquarteroffice/headquarteroffice.component';
import { ZonalofficedetailsComponent } from './location/zonalofficedetails/zonalofficedetails.component';
import { AddeditzonalofficeComponent } from './location/addeditzonaloffice/addeditzonaloffice.component';
import { RegionalofficedetailComponent } from './location/regionalofficedetail/regionalofficedetail.component';
import { AddeditregionalofficeComponent } from './location/addeditregionaloffice/addeditregionaloffice.component';
import { CountryregiondetailsComponent } from './location/countryregiondetails/countryregiondetails.component';
import { AddeditcountryregionComponent } from './location/addeditcountryregion/addeditcountryregion.component';
import { StatedetailComponent } from './location/statedetail/statedetail.component';
import { AddeditstateComponent } from './location/addeditstate/addeditstate.component';
import { DistrictdetailsComponent } from './location/districtdetails/districtdetails.component';
import { AddeditdistrictComponent } from './location/addeditdistrict/addeditdistrict.component';
import { CitydetailsComponent } from './location/citydetails/citydetails.component';
import { AddeditcityComponent } from './location/addeditcity/addeditcity.component';
import { ManageofficersComponent } from './officers/manageofficers/manageofficers.component';
import { AddeditofficerComponent } from './officers/addeditofficer/addeditofficer.component';
import { OfficerdetailComponent } from './officers/officerdetail/officerdetail.component';
import { LocationlistComponent } from './location/locationlist/locationlist.component';
import { OfficerlistComponent } from './officers/officerlist/officerlist.component';
import { ViewauditdetailsComponent } from './auditlogs/viewauditdetails/viewauditdetails.component';
import { AuditlistComponent } from './auditlogs/auditlist/auditlist.component';
import { UserloginlogComponent } from './auditlogs/userloginlog/userloginlog.component';
import { SetupreportlistComponent } from './setupreport/setupreportlist/setupreportlist.component';
import { ManageprofileComponent } from './setupreport/manageprofile/manageprofile.component';
import { AddeditprofiledetailComponent } from './setupreport/addeditprofiledetail/addeditprofiledetail.component';
import { ManagemailComponent } from './setupreport/managemail/managemail.component';
import { ManageprofilegroupComponent } from './setupreport/manageprofilegroup/manageprofilegroup.component';
import { ReportconfigurationComponent } from './setupreport/reportconfiguration/reportconfiguration.component';
import { AddeditreportconfigurationComponent } from './setupreport/addeditreportconfiguration/addeditreportconfiguration.component';
import { ReportmailinfoComponent } from './setupreport/reportmailinfo/reportmailinfo.component';

import { ServicedetailComponent } from './configuration/servicedetail/servicedetail.component';
import { AddeditserviceComponent } from './configuration/addeditservice/addeditservice.component';
import { NotificationconfigurationComponent } from './configuration/notificationconfiguration/notificationconfiguration.component';
import { AddeditnotificationComponent } from './configuration/addeditnotification/addeditnotification.component';
import { ConfigurationmenuComponent } from './configuration/configurationmenu/configurationmenu.component';
import { AddGroupComponent } from './setupreport/add-group/add-group.component';
import { SubscribeNotificationComponent } from './configuration/subscribe-notification/subscribe-notification.component';
import { AddEditRoleComponent } from './managerole/add-edit-role/add-edit-role.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  { path: 'manageuser', component: ManageuserComponent },
  { path: 'addedituser', component: AdduserComponent },
  { path: 'managerole', component: ManagerolelistComponent },
  { path: 'hotlistingmenu', component: MenulistComponent },
  { path: 'hotlistreactive', component: HotlistreactiveComponent },
  { path: 'bulkhotlist', component: BulkhotlistComponent },
  { path: 'hotlistapproval', component: HotlistapprovalComponent },

  { path: 'regionalofficedetail', component: RegionalofficedetailComponent },
  { path: 'countryregiondetail', component: CountryregiondetailsComponent },
  { path: 'locationlist', component: LocationlistComponent },
  { path: 'addeditcountryregion', component: AddeditcountryregionComponent },
  { path: 'statedetail', component: StatedetailComponent },
  { path: 'addeditstate', component: AddeditstateComponent },

  { path: 'districtdetail', component: DistrictdetailsComponent },
  { path: 'addeditdistrict', component: AddeditdistrictComponent },
  { path: 'citydetails', component: CitydetailsComponent },
  { path: 'addeditcity', component: AddeditcityComponent },
  { path: 'manageofficers', component: ManageofficersComponent },
  { path: 'addeditofficer', component: AddeditofficerComponent },
  { path: 'officerdetail', component: OfficerdetailComponent },
  { path: 'officerlist', component: OfficerlistComponent },

  { path: 'auditlist', component: AuditlistComponent },
  { path: 'viewauditdetails', component: ViewauditdetailsComponent },
  { path: 'userloginlog', component: UserloginlogComponent },
  { path: 'servicedetail', component: ServicedetailComponent },
  { path: 'addeditservice', component: AddeditserviceComponent },
  { path: 'notificationdetail', component: NotificationconfigurationComponent },
  { path: 'notification-subscribe', component: SubscribeNotificationComponent },
  { path: 'addeditnotification', component: AddeditnotificationComponent },
  { path: 'configurationmenu', component: ConfigurationmenuComponent },
  { path: 'setupreportlist', component: SetupreportlistComponent },
  { path: 'manageprofile', component: ManageprofileComponent },
  { path: 'addeditprofiledetail', component: AddeditprofiledetailComponent },
  { path: 'managemail', component: ManagemailComponent },
  { path: 'manageprofilegroup', component: ManageprofilegroupComponent },
  { path: 'reportconfiguration', component: ReportconfigurationComponent },
  {
    path: 'addeditreportconfiguration',
    component: AddeditreportconfigurationComponent,
  },
  { path: 'reportmailinfo', component: ReportmailinfoComponent },
  { path: 'setupreportlist', component: SetupreportlistComponent },
  { path: 'manageprofile', component: ManageprofileComponent },
  { path: 'addeditprofiledetail', component: AddeditprofiledetailComponent },
  { path: 'managemail', component: ManagemailComponent },
  { path: 'manageprofilegroup', component: ManageprofilegroupComponent },
  { path: 'add-group', component: AddGroupComponent },
  { path: 'reportconfiguration', component: ReportconfigurationComponent },
  {
    path: 'addeditreportconfiguration',
    component: AddeditreportconfigurationComponent,
  },
  {
    path: 'Viewhotlistedreactivateddata',
    component: ViewhotlistedreactivatedComponent,
  },
  { path: 'headquarteroffice', component: HeadquarterofficeComponent },
  { path: 'Zonalofficedetails', component: ZonalofficedetailsComponent },
  { path: 'addeditzonaloffice', component: AddeditzonalofficeComponent },
  { path: 'addeditregionaloffice', component: AddeditregionalofficeComponent },
  { path: 'add-role', component: AddEditRoleComponent },

  { path: '', redirectTo: '/admin/security', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
