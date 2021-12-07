import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-managebankenrollment',
  templateUrl: './managebankenrollment.component.html',
  styleUrls: ['./managebankenrollment.component.css']
})
export class ManagebankenrollmentComponent implements OnInit {
  isshow:number=0;
  GetSavedData:any=[];
  isDisplay:number=0;
    page = 1;
    pageSize = 4;
    collectionSize = 5;

    isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup;
fourthFormGroup!:FormGroup;
    constructor(private _formBuilder: FormBuilder) { }
  
    ngOnInit(): void {

      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl3: ['', Validators.required]
      });

      this.thirdFormGroup = this._formBuilder.group({
        secondCtrl2: ['', Validators.required]
      });
      this.fourthFormGroup = this._formBuilder.group({
        secondCtrl1: ['', Validators.required]
      });


      this.ManageOfficers();
    }
  
   
    ShowTableList(){
       this.isshow=1;
    }
    Reset(){
      this.isshow=0;
    }
    ManageOfficers() {
      this.GetSavedData = [
        {
          "slno":1,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
  
        },
        {
          "slno":2,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
        },
        {
          "slno":3,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
        }
      ];
    }

    ShowDetails(){
this.isDisplay=1;
    }

}
