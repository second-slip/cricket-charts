import { Component, HostListener, OnInit, signal, viewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFetchService } from '../data-fetch.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-strike-rate',
    host: {
      '(window:resize)': '_onResize($event)',
    },
    imports: [BaseChartDirective, MatButtonModule, MatIconModule, MatTooltipModule],
    templateUrl: './strike-rate.component.html',
    styleUrl: './strike-rate.component.scss'
})
export class StrikeRateComponent implements OnInit {
  readonly chart = viewChild(BaseChartDirective);

  //@HostListener('window:resize', ['$event.target.innerWidth'])
  
  private _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  private axis = signal(15);

  protected chartPlugins = [ChartDataLabels];
  protected loaded = signal(false);
  protected btnText = signal('Focus axis');

  protected bowlingStrikeData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative strike rate',
        yAxisID: 'y'
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getCumulativeStrikeRateSeries()
      // .pipe(tap(x => console.log(x.chartData[0].length)))
      .subscribe({
        next: (data: IChartData) => {
          this.bowlingStrikeData.labels = data.chartLabels,
            this.bowlingStrikeData.datasets[0].data = data.chartData[0]
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  protected focusAxis(): void {
    if (this.axis() === 53) {
      this.axis.set(15);
      this.btnText.set('Focus axis');
    } else {
      this.axis.set(53);
      this.btnText.set('Reset axis');
    }
    this.lineChartOptions = {
      // scales: {
      //   y: {
      //     min: this.axis()
      //   }
      // },
      scales: {
        y: {
          min: this.axis(),
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          min: this.axis(),
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            display: false
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }
      },
      responsive: true, maintainAspectRatio: false,
      devicePixelRatio: 4,
      plugins: {
        legend: {
          position: 'bottom'
        },
        datalabels: {
          borderRadius: 4,
          color: 'black',
          // font: {
          //   weight: 'bold'
          // },
          padding: 6,
          align: 'start',
          anchor: 'start',
          formatter: (val, ctx) => ctx.dataIndex === this.bowlingStrikeData.datasets[0].data.length - 1 ? val : ''
        },
        // title: {
        //   display: true,
        //   text: 'Strike rate'
        // },
        // subtitle: {
        //   display: true,
        //   text: 'JM Anderson',
        // }
      }
    };

    this.chart()?.update();
  }


  protected lineChartOptions: ChartConfiguration<'line'>['options'] = {
    // onResize: () => {
    //   alert('k')
    //   this.chart?.chart?.resize();//.update();
    // },
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
          display: false
        },
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      datalabels: {
        borderRadius: 4,
        color: 'black',
        padding: 6,
        align: 'start',
        anchor: 'start',
        formatter: (val, ctx) => ctx.dataIndex === this.bowlingStrikeData.datasets[0].data.length - 1 ? val : ''
      },
      // title: {
      //   display: true,
      //   text: 'Strike rate'
      // },
      // subtitle: {
      //   display: true,
      //   text: 'JM Anderson',
      // }
    }
  };
}