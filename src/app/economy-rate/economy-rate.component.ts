import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';
import { DataFetchService } from '../data-fetch.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-economy-rate',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './economy-rate.component.html',
  styleUrl: './economy-rate.component.css'
})
export class EconomyRateComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }

  public chartPlugins = [ChartDataLabels];
  public loaded = signal(false);

  public bowlingEconomyData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative economy rate'
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getCumulativeEconomySeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          this.bowlingEconomyData.labels = data.chartLabels,
            this.bowlingEconomyData.datasets[0].data = data.chartData[0]

          console.log(this.bowlingEconomyData.labels.length)
          console.log(this.bowlingEconomyData.datasets[0].data.length)
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom'
      },
      datalabels: {
        borderRadius: 4,
        color: 'black',
        font: {
          weight: 'bold'
        },
        padding: 6,
        offset: 0,
        align: 'top',
        anchor: 'end',
        formatter: (val, ctx) => ctx.dataIndex === this.bowlingEconomyData.datasets[0].data.length - 1 ? val : ''
      }
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
          display: false
        },
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      }
    }
  };
}