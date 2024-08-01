import { Component, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFetchService } from '../data-fetch.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-strike-rate',
  standalone: true,
  imports: [BaseChartDirective, MatButtonModule, MatIconModule],
  templateUrl: './strike-rate.component.html',
  styleUrl: './strike-rate.component.css'
})
export class StrikeRateComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }

  private axis = signal(15);

  public chartPlugins = [ChartDataLabels];
  public loaded = signal(false);
  public btnText = signal('Focus axis');

  public bowlingStrikeData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative strike rate'
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

  public focusAxis(): void {
    if (this.axis() === 53) {
      this.axis.set(15);
      this.btnText.set('Focus axis');
    } else {
      this.axis.set(53);
      this.btnText.set('Reset axis');
    }
    this.lineChartOptions = {
      scales: {
        y: {
          min: this.axis()
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

    this.chart?.update();
  }


  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    // onResize: () => {
    //   alert('k')
    //   this.chart?.chart?.resize();//.update();
    // },
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