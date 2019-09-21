import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { inject } from '@angular/core/testing';
import { DataentryComponent } from '../dataentry/dataentry.component';
import { Subject } from 'rxjs';

export interface ScanObject {
  fixtureName: string;
  zone: string;
}

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerModule;
  title = 'ProtoScan';
  responseMessage = "Scan to Continue";
  ScanSubject = new Subject<any>();
  constructor(private Router: Router) {


  }
  scanSuccess(event: string) {
    let qr = event;
    console.log(qr);
    try {
      let parse: ScanObject = JSON.parse(qr);
      let nav: NavigationExtras = {
        queryParams: { params: JSON.stringify(parse) }
      }
      this.Router.navigate(['dataentry'], nav);
    }
    catch (e) {
      console.log(e);
      this.responseMessage = "Invalid QR";
      setTimeout(() => { this.responseMessage = "Scan to Continue" }, 5000);

    }
  }

  ngOnInit() {
  }

}
