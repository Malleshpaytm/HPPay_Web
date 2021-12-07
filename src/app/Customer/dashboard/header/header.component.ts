import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class CustomerHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.loadScript('./assets/customerassets/statichtml/js/vendors.min.js');
    this.loadScript('../assets/customerassets/statichtml/vendors/chartjs/Chart.min.js');
    this.loadScript('../assets/customerassets/statichtml/js/app.min.js');
  }
  public loadScript(url: string)
  {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
