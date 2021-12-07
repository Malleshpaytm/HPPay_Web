import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportconfiguration',
  templateUrl: './reportconfiguration.component.html',
  styleUrls: ['./reportconfiguration.component.css']
})
export class ReportconfigurationComponent implements OnInit {
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetReportConfigurationData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor() { }

  ngOnInit(): void {
    this.ViewReportConfigurationData();
  }
  ViewReportConfigurationData() {
    this.GetReportConfigurationData = [
      {
        "reportname":"Paynorn DAILY TRANSACTION MIS",
        "reportprocedure":"Report.uspPayNormDailySuccessTransaction",
        "fileprefix":"PAYNORM_DAILY_MIS_<DD><MM><YYYY>",
        "filetype":"Excel",
        "compress":"Yes",
        "reoccurrencetype":"Adhoc",
      },
      {
        "reportname":"LPG DISTRIBUTION DAILY TRANSACTION MIS",
        "reportprocedure":"Report.usp_HPRefuel_Transaction_LPG_Distribution",
        "fileprefix":"LPG_DISTRIBUTION_DAILY_MIS_<DD><MM><YYYY>",
        "filetype":"Excel",
        "compress":"Yes",
        "reoccurrencetype":"Daily",
      },
      {
        "reportname":"HP-Pay DAILY ENROLLMENT STATUS MIS",
        "reportprocedure":"Report.usp_HpRefuelEnrollmentStatus",
        "fileprefix":"HP-Pay_ENROLLMENT_DAILY_MIS_<DD><MM><YYYY>",
        "filetype":"Excel",
        "compress":"Yes",
        "reoccurrencetype":"Daily",
      }
    ];
  }
  limitChange(limit: number) {
   
  }

}
