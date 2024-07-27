import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';
import { DataFetchService } from '../data-fetch.service';

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
    }
  };
}