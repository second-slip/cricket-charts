import { Component, HostListener, signal, viewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataFetchService } from '../../data-fetch.service';
import { IHomeAwayData } from './i-hone-away-data.dto';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-ave-home-away',
    host: {
      '(window:resize)': '_onResize($event)',
    },
    imports: [BaseChartDirective, MatButtonModule, MatTooltipModule],
    templateUrl: './ave-home-away.component.html',
    styleUrl: './ave-home-away.component.scss'
})
export class AveHomeAwayComponent {
  readonly chart = viewChild(BaseChartDirective);
  //protected chartPlugins = [ChartDataLabels];

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  protected _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  protected loaded = signal(false);

  protected homeAwayAverageData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative average - home'
      },
      {
        data: [],
        label: 'cumulative average - abroad'
      },
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  protected btnText = signal('Focus axis');
  private axis = signal(120);

  protected focusAxis(): void {
    if (this.axis() === 70) {
      this.axis.set(120);
      this.btnText.set('Focus axis');
    } else {
      this.axis.set(70);
      this.btnText.set('Reset axis');
    }

this.lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 4,
  plugins: {
    legend: {
      position: 'bottom'
    },
    // datalabels: {
    //   borderRadius: 4,
    //   color: 'black',
    //   font: {
    //     weight: 'bold'
    //   },
    //   padding: 6,
    //   align: 'top',
    //   anchor: 'start',
    //   formatter: (val, ctx) => {
    //     if ((ctx.dataIndex === this.homeAwayAverageData.datasets[0].data.length - 1) && (ctx.datasetIndex === 0) || (ctx.dataIndex === this.homeAwayAverageData.datasets[1].data.length - 1) && (ctx.datasetIndex === 1)) {
    //       return val;
    //     } else {
    //       return '';
    //     }
    //   }
    // }
  },
  scales: {
    y: {
      max: this.axis(),
      type: 'linear',
      display: true,
      position: 'left',
    }
  }
};




  }

  private _getData(): void {
    this._service.getAveHomeAway()
      .pipe()
      .subscribe({
        next: (data: IHomeAwayData) => {
          this.homeAwayAverageData.labels = data.labels,
            this.homeAwayAverageData.datasets[0].data = data.home,
            this.homeAwayAverageData.datasets[1].data = data.away
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  protected lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom'
      },
      // datalabels: {
      //   borderRadius: 4,
      //   color: 'black',
      //   font: {
      //     weight: 'bold'
      //   },
      //   padding: 6,
      //   align: 'top',
      //   anchor: 'start',
      //   formatter: (val, ctx) => {
      //     if ((ctx.dataIndex === this.homeAwayAverageData.datasets[0].data.length - 1) && (ctx.datasetIndex === 0) || (ctx.dataIndex === this.homeAwayAverageData.datasets[1].data.length - 1) && (ctx.datasetIndex === 1)) {
      //       return val;
      //     } else {
      //       return '';
      //     }
      //   }
      // }
    },
    scales: {
      y: {
        // max: 70,
        type: 'linear',
        display: true,
        position: 'left',
      }
    }
  };
}