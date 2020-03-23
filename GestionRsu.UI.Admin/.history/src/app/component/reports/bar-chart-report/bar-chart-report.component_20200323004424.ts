import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { SeparationService } from '../../../shared/services/separation.service';


@Component({
  selector: 'app-bar-chart-report',
  templateUrl: './bar-chart-report.component.html',
  styleUrls: ['./bar-chart-report.component.css']
})
export class BarChartReportComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Seria A' },
    // { data: [], label: '' },
    // { data: [], label: '' }
  ];

  constructor(private separationService: SeparationService) {this. getSeparationByPlant(); }

  ngOnInit() {
  }

  private getSeparationByPlant() {
    this.separationService.getSeparationByPlant().subscribe(result => {
       // let i = 0;
      result.forEach(item => {
           this.barChartLabels.push(item.plantName);
           this.barChartData[0].data.push(item.quantity);
           // this.barChartData[0].label= (item.plantName);
           // i  = i + 1;
        });
    }, error => {

    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
