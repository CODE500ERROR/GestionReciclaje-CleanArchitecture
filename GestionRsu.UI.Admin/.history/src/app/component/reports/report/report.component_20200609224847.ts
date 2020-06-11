import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportsType = [
    {
      id: 1,
      value: 'Separaciones por platna'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
