import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataFetchService } from '../data-fetch.service';
import { IChartData } from '../i-chart-data.dto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-year-bar',
  standalone: true,
  imports: [BaseChartDirective, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './year-bar.component.html',
  styleUrl: './year-bar.component.scss'
})
export class YearBarComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }

  public chartPlugins = [ChartDataLabels];
  public btnText = signal('Show 5w');
  public loaded = signal(false);

  public wicketsData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'matches',
        yAxisID: 'y'
      },
      {
        data: [],
        label: 'wickets',
        yAxisID: 'y'
      },
      {
        data: [],
        label: 'average',
        yAxisID: 'y1'
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getYearsAnalysis()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          this.wicketsData.labels = data.chartLabels,
            this.wicketsData.datasets[0].data = data.chartData[0],
            this.wicketsData.datasets[1].data = data.chartData[1],
            this.wicketsData.datasets[2].data = data.chartData[2]
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
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
    },
    plugins: {
      // datalabels: {
      //   align: 'end',
      //   anchor: 'end'
      // },
      legend: {
        position: 'bottom'
      }
    }
  };
}
