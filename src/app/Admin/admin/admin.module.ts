import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { ManageuserComponent } from './manageuser/manageuser/manageuser.component';
import { AdduserComponent } from './manageuser/adduser/adduser.component';
import { ManagerolelistComponent } from './managerole/managerolelist/managerolelist.component';
import { MenulistComponent } from './hotlisting/menulist/menulist.component';
import { HotlistreactiveComponent } from './hotlisting/hotlistreactive/hotlistreactive.component';
import { ViewhotlistedreactivatedComponent } from './hotlisting/viewhotlistedreactivated/viewhotlistedreactivated.component';
import { HotlistapprovalComponent } from './hotlisting/hotlistapproval/hotlistapproval.component';
import { BulkhotlistComponent } from './hotlisting/bulkhotlist/bulkhotlist.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
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
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageofficersComponent } from './officers/manageofficers/manageofficers.component';
import { AddeditofficerComponent } from './officers/addeditofficer/addeditofficer.component';
import { OfficerdetailComponent } from './officers/officerdetail/officerdetail.component';
import { LocationlistComponent } from './location/locationlist/locationlist.component';
import { OfficerlistComponent } from './officers/officerlist/officerlist.component';
import { ViewauditdetailsComponent } from './auditlogs/viewauditdetails/viewauditdetails.component';
import { AuditlistComponent } from './auditlogs/auditlist/auditlist.component';
import { UserloginlogComponent } from './auditlogs/userloginlog/userloginlog.component';
import { MatIconModule } from '@angular/material/icon';
import { SetupreportlistComponent } from './setupreport/setupreportlist/setupreportlist.component';
import { ManageprofileComponent } from './setupreport/manageprofile/manageprofile.component';
import { AddeditprofiledetailComponent } from './setupreport/addeditprofiledetail/addeditprofiledetail.component';
import { ManagemailComponent } from './setupreport/managemail/managemail.component';
import { ManageprofilegroupComponent } from './setupreport/manageprofilegroup/manageprofilegroup.component';
import { ReportconfigurationComponent } from './setupreport/reportconfiguration/reportconfiguration.component';
import { AddeditreportconfigurationComponent } from './setupreport/addeditreportconfiguration/addeditreportconfiguration.component';
import { ServicedetailComponent } from './configuration/servicedetail/servicedetail.component';
import { AddeditserviceComponent } from './configuration/addeditservice/addeditservice.component';
import { NotificationconfigurationComponent } from './configuration/notificationconfiguration/notificationconfiguration.component';
import { AddeditnotificationComponent } from './configuration/addeditnotification/addeditnotification.component';
import { ConfigurationmenuComponent } from './configuration/configurationmenu/configurationmenu.component';
import { ReportmailinfoComponent } from './setupreport/reportmailinfo/reportmailinfo.component';
import { AddGroupComponent } from './setupreport/add-group/add-group.component';
import { SubscribeNotificationComponent } from './configuration/subscribe-notification/subscribe-notification.component';
import { AddEditRoleComponent } from './managerole/add-edit-role/add-edit-role.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    SecurityComponent,
    ManageuserComponent,
    AdduserComponent,
    ManagerolelistComponent,
    MenulistComponent,
    HotlistreactiveComponent,
    ViewhotlistedreactivatedComponent,
    HotlistapprovalComponent,
    BulkhotlistComponent,
    HeadquarterofficeComponent,
    ZonalofficedetailsComponent,
    AddeditzonalofficeComponent,
    RegionalofficedetailComponent,
    AddeditregionalofficeComponent,
    CountryregiondetailsComponent,
    AddeditcountryregionComponent,
    StatedetailComponent,
    AddeditstateComponent,
    DistrictdetailsComponent,
    AddeditdistrictComponent,
    CitydetailsComponent,
    AddeditcityComponent,
    ManageofficersComponent,
    AddeditofficerComponent,
    OfficerdetailComponent,
    LocationlistComponent,
    OfficerlistComponent,
    ViewauditdetailsComponent,
    AuditlistComponent,
    UserloginlogComponent,
    SetupreportlistComponent,
    ManageprofileComponent,
    AddeditprofiledetailComponent,
    ManagemailComponent,
    ManageprofilegroupComponent,
    ReportconfigurationComponent,
    AddeditreportconfigurationComponent,
    ServicedetailComponent,
    AddeditserviceComponent,
    NotificationconfigurationComponent,
    AddeditnotificationComponent,
    ConfigurationmenuComponent,
    ReportmailinfoComponent,
    AddGroupComponent,
    SubscribeNotificationComponent,
    AddEditRoleComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SharedModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
  ],
})
export class AdminModule {}
