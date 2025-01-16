import { Component, HostListener, signal, viewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-cumulative-ave-line',
  host: {
    '(window:resize)': '_onResize($event)',
  },
  imports: [BaseChartDirective],
  templateUrl: './cumulative-ave-line.component.html',
  styleUrl: './cumulative-ave-line.component.scss',
})
export class CumulativeAveLineComponent {
  readonly chart = viewChild(BaseChartDirective);

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  private _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  protected loaded = signal(false);

  protected bowlingAverageData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative average',
      },
      {
        data: [],
        label: '3-point moving cumulative average',
      },
    ],
  };

  constructor(private readonly _service: DataFetchService) {}

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service
      .getCumulativeAverageSeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          (this.bowlingAverageData.labels = data.chartLabels),
            (this.bowlingAverageData.datasets[0].data = data.chartData[0]),
            (this.bowlingAverageData.datasets[1].data = data.chartData[1]);
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.loaded.set(true);
  }

  protected lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom',
      },
      // title: {
      //   display: true,
      //   text: 'Cumulative bowling average'
      // },
      // subtitle: {
      //   display: true,
      //   text: 'JM Anderson',
      // }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          display: false,
        },
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };
}
