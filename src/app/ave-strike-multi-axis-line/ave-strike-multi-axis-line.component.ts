import { Component, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { DataFetchService } from '../data-fetch.service';
import { IChartData } from '../i-chart-data.dto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ave-strike-multi-axis-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './ave-strike-multi-axis-line.component.html',
  styleUrl: './ave-strike-multi-axis-line.component.css'
})
export class AveStrikeMultiAxisLineComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }
  
  public chartPlugins = [ChartDataLabels];
  public loaded = signal(false);

  public bowlingAverageStrikeData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative average',
        yAxisID: 'y'
      },
      {
        data: [],
        label: 'cumulative strke rate',
        yAxisID: 'y1',
      }
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
          this.bowlingAverageStrikeData.labels = data.chartLabels,
            this.bowlingAverageStrikeData.datasets[0].data = data.chartData[0]
        },
        error: (e) => { console.log(e); }
      });

    this._service.getCumulativeStrikeRateSeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          this.bowlingAverageStrikeData.labels = data.chartLabels,
            this.bowlingAverageStrikeData.datasets[1].data = data.chartData[0]
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cumulative bowling avaerage & strike rate'
      },
      subtitle: {
        display: true,
        text: 'JM Anderson',
      },
      datalabels: {
        borderRadius: 4,
        color: 'black',
        // font: {
        //   weight: 'bold'
        // },
        padding: 6,
        align: 'top',
        // anchor: 'start',
        offset: 0,
        formatter: (val, ctx) => {
          if ((ctx.dataIndex === this.bowlingAverageStrikeData.datasets[0].data.length - 1) && (ctx.datasetIndex === 0 || 1)) {
            return val;
          } else {
            return '';
          }
        }
      },
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

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  };
}