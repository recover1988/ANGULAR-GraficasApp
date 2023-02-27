import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        console.log(data)
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartLabels.push(...labels);
        this.doughnutChartDatasets.push({data:values})
      })


  }

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartDatasets: ChartDataset<"doughnut", number[]>[] = [
    // {
    //   data: [350, 450, 100],
    //   backgroundColor: [
    //     '#8338ec',
    //     '#ff006e',
    //     '#ffd60a'
    //   ],
    // },

  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: this.doughnutChartDatasets,
  };
  public doughnutChartType: ChartType = 'doughnut';

}
