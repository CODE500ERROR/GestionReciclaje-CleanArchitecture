import { Component } from '@angular/core';
import { SeparationService } from '../../services/separation.service';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  /**
   *
   */
  constructor(private separationService: SeparationService) {
    this.getSeparationByPlant();
  }
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = [];
  public polarAreaChartData: number[] = [];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';


  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
      ],
    },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  private getSeparationByPlant() {
    this.separationService.getSeparationByPlant().subscribe(
      (data) => {
        console.log(data);
         this.MapingPieChartReport(data); 
         this.MapingDoughnutCharReport(data);
         this.MapingPolarAreaChartReport(data);
        // this.MappedBarChartReport(data);
      },
      (error) => {
        console.log(error)
      }
    );
  }

  private MapingDoughnutCharReport(data){
    data.forEach((item) => {
      this.doughnutChartLabels.push(item.plantName);
      this.doughnutChartData.push(item.quantity);
    });
  }
  
  private MapingPieChartReport(data) {
    data.forEach((item) => {
      this.pieChartLabels.push(item.plantName);
      this.pieChartData.push(item.quantity);
    });
  }

  private MapingPolarAreaChartReport(data){
    data.forEach((item) => {
      this.polarAreaChartLabels.push(item.plantName);
      this.polarAreaChartData.push(item.quantity);
    });
  }
  
}
