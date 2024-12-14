import { Component, HostListener, signal, viewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData } from 'chart.js';
import { DataFetchService } from '../data-fetch.service';
import { IChartData } from '../i-chart-data.dto';

@Component({
  selector: 'app-innings-bar',
  host: {
    '(window:resize)': '_onResize($event)',
  },
  imports: [BaseChartDirective], // MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './innings-bar.component.html',
  styleUrl: './innings-bar.component.scss',
})
export class InningsBarComponent {
  readonly chart = viewChild(BaseChartDirective);

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  private _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  public chartPlugins = [ChartDataLabels];
  public btnText = signal('Show 5w');
  public loaded = signal(false);

  public wicketsData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'innings',
        yAxisID: 'y',
      },
      {
        data: [],
        label: 'wickets',
        yAxisID: 'y',
      },
      // {
      //   data: [25.21, 26.44, 28.68, 25.33],
      //   label: 'average',
      //   yAxisID: 'y1',
      //   hidden: true
      // }
    ],
  };

  constructor(private readonly _service: DataFetchService) {}

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service
      .getMatchInningsAnalysis()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          (this.wicketsData.labels = data.chartLabels),
            (this.wicketsData.datasets[0].data = data.chartData[0]),
            (this.wicketsData.datasets[1].data = data.chartData[1]);
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.loaded.set(true);
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Match innings',
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Count of innings / wickets',
        },
      }, //,
      // y1: {
      //   type: 'linear',
      //   display: true,
      //   position: 'right',

      //   // grid line settings
      //   grid: {
      //     drawOnChartArea: false, // only want the grid lines for one axis to show up
      //   },
      // },
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
        },
      },
      legend: {
        position: 'bottom',
      },
    },
  };
}
