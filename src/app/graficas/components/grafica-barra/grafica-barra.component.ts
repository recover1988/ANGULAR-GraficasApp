import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;



  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[] | unknown[] | undefined;
  @Input() inputDatasets!: ChartDataset<any, any>[];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // indexAxis: 'y',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {}
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: 'white'
      }
    }
  };
  public barChartType: ChartType = 'bar'; // los tipos de gráfica --> pie, buble, etc
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y'; // angular confía en mí siempre vas a tener algo ahí!
    }
    this.barChartData.datasets = this.inputDatasets;
    this.barChartData.labels = this.inputLabels;
  };


}
