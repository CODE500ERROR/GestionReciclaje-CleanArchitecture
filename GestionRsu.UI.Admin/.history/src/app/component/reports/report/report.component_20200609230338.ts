import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { SeparationService } from '../../../shared/services/separation.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  reportsType = [
    {
      id: 1,
      value: 'Separaciones por platna',
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80], label: 'Series A' },
    // { data: [28, 48, 40], label: 'Series B' }
    // { data: [], label: '' },
    // { data: [], label: '' }
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
    },
  };

  reportTypeSelected = null;
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
      ],
    },
  ];

  constructor(private separationService: SeparationService) {
    this.getSeparationByPlant();
  }

  ngOnInit() {}

  private getSeparationByPlant() {
    this.separationService.getSeparationByPlant().subscribe(
      (data) => {
        this.MappedPieChartReport(data);
        this.MappedBarChartReport(data);
      },
      (error) => {}
    );
  }

  private MappedPieChartReport(data) {
    data.forEach((item) => {
      this.pieChartLabels.push(item.plantName);
      this.pieChartData.push(item.quantity);
    });
  }
  private MappedBarChartReport(data) {
    data.forEach((item) => {
      this.barChartLabels.push(item.plantName);
    });
  }
}
