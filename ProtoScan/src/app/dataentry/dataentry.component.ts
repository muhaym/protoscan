import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScannerComponent, ScanObject } from '../scanner/scanner.component';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.scss']
})


export class DataentryComponent implements OnInit {
  data: ScanObject;
  sample: string;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('params')) {
        this.data = JSON.parse(params.get('params'));
        console.log(this.data);
        console.log(this.sample = params.get('params'));
      }
      this.router.navigate(['dataentry']);
    });
  }

  ngOnInit() {
  }

  routeBack() {
    this.router.navigate(['']);
  }

}
