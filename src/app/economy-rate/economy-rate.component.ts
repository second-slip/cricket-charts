import { Component, HostListener, signal, viewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';
import { DataFetchService } from '../data-fetch.service';
// // import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-economy-rate',
  host: {
    '(window:resize)': '_onResize($event)',
  },
  imports: [BaseChartDirective, MatButtonModule, MatTooltipModule],
  templateUrl: './economy-rate.component.html',
  styleUrl: './economy-rate.component.scss',
})
export class EconomyRateComponent {
  readonly chart = viewChild(BaseChartDirective);

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  protected _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  //protected chartPlugins = [ChartDataLabels];
  protected loaded = signal(false);

  protected bowlingEconomyData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative economy rate',
        yAxisID: 'y',
      },
    ],
  };

  constructor(private readonly _service: DataFetchService) {}

  ngOnInit(): void {
    this._getData();
  }

  protected btnText = signal('Focus axis');
  private axis = signal(4.6);

  protected focusAxis(): void {
    if (this.axis() === 4) {
      this.axis.set(4.6);
      this.btnText.set('Focus axis');
    } else {
      this.axis.set(4);
      this.btnText.set('Reset axis');
    }

    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: 4,
      plugins: {
        legend: {
          position: 'bottom',
        },
        // datalabels: {
        //   borderRadius: 4,
        //   color: 'black',
        //   font: {
        //     weight: 'bold',
        //   },
        //   padding: {},
        //   offset: 1,
        //   align: 'top',
        //   anchor: 'end',
        //   formatter: (val, ctx) =>
        //     ctx.dataIndex ===
        //     this.bowlingEconomyData.datasets[0].data.length - 1
        //       ? val
        //       : '',
        // },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'runs per over',
          },
          max: this.axis(),
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          max: this.axis(),
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            display: false,
          },
          grid: {
            // grid line settings
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    };
  }

  private _getData(): void {
    this._service
      .getCumulativeEconomySeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          (this.bowlingEconomyData.labels = data.chartLabels),
            (this.bowlingEconomyData.datasets[0].data = data.chartData[0]);
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
      // datalabels: {
      //   borderRadius: 4,
      //   color: 'black',
      //   font: {
      //     weight: 'bold',
      //   },
      //   padding: {},
      //   offset: 1,
      //   align: 'top',
      //   anchor: 'end',
      //   formatter: (val, ctx) =>
      //     ctx.dataIndex === this.bowlingEconomyData.datasets[0].data.length - 1
      //       ? val
      //       : '',
      // },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'runs per over',
        },
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
        grid: {
          // grid line settings
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };
}
