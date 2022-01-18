import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkhotlist',
  templateUrl: './bulkhotlist.component.html',
  styleUrls: ['./bulkhotlist.component.css']
})
export class BulkhotlistComponent implements OnInit {
  filePath='';
  constructor() { }

  ngOnInit(): void {
  }
  onFileUpload(event){
    debugger;
    this.filePath=event.target.value
  }
}
