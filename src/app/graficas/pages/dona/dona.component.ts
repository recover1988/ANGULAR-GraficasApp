import { Component } from '@angular/core';
import { ChartData, ChartType, Color, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,

    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          '#8338ec',
          '#ff006e',
          '#ffd60a'
        ],
      },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  // public barChartColors: Color[] = [
  //   'red', 'green', 'blue'
  // ]

}
