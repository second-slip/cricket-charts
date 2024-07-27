import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-cumulative-ave-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cumulative-ave-line.component.html',
  styleUrl: './cumulative-ave-line.component.css'
})
export class CumulativeAveLineComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
     this.chart?.chart?.resize();
  }
  
  public loaded = signal(false);

  public bowlingAverageData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative average'
      },
      {
        data: [],
        label: '3-point moving cumulative average'
      },
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getCumulativeAverageSeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          this.bowlingAverageData.labels = data.chartLabels,
            this.bowlingAverageData.datasets[0].data = data.chartData[0],
            this.bowlingAverageData.datasets[1].data = data.chartData[1]
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom'
      }
      // title: {
      //   display: true,
      //   text: 'Cumulative bowling average'
      // },
      // subtitle: {
      //   display: true,
      //   text: 'JM Anderson',
      // }
    }
  };
}