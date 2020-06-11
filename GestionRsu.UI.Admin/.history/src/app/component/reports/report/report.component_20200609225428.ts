import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { SeparationService } from '../../../shared/services/separation.service';


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
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          // const quantity = (ctx.chart.data.datasets[0].data[ctx.dataIndex]);
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  
  constructor(private separationService: SeparationService) {this. getSeparationByPlant(); }

  ngOnInit() {
  }

  private getSeparationByPlant() {
    this.separationService.getSeparationByPlant().subscribe(data => {
        data.forEach(item => {
          this.pieChartLabels.push(item.plantName);
          this.pieChartData.push(item.quantity);
        });
    }, error => {

    });
  }

}
