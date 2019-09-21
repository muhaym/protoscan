import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerModule, ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router, NavigationExtras } from '@angular/router';

export interface ScanObject {
  fixtureName: string;
  zone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerModule;
  title = 'ProtoScan';
  responseMessage = "Scan to Continue";

  constructor(private Router: Router) {
  }
  scanSuccess(event: string) {
    let qr = event;
    console.log(qr);
    try {
      let parse: ScanObject = JSON.parse(qr);
      let nav: NavigationExtras = {
        queryParams: {params: JSON.stringify(parse)}
      }
      this.Router.navigate(['dataentry'], nav);
    }
    catch (e) {
      console.log(e);
      this.responseMessage = "Invalid QR";
      setTimeout(()=>{this.responseMessage="Scan to Continue"},5000);
      
    }

  }
} 
