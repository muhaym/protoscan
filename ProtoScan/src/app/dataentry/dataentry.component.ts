import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScannerComponent } from '../scanner/scanner.component';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.scss']
})
export class DataentryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private Scanner: ScannerComponent) {
    @inject(forwardRef(() => DataentryComponent))
    this.Scanner.
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
