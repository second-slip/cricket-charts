import { Component, HostListener, signal, viewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';

import { DataFetchService } from '../data-fetch.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-wickets-opponent-bar',
  host: {
    '(window:resize)': '_onResize($event)',
  },
  imports: [
    BaseChartDirective,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './wickets-opponent-bar.component.html',
  styleUrl: './wickets-opponent-bar.component.scss',
})
export class WicketsOpponentBarComponent {
  readonly chart = viewChild(BaseChartDirective);

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  protected _onResize(event: any): void {
    this.chart()?.chart?.resize();
  }

  protected btnText = signal('Show 5w');
  protected loaded = signal(false);

  protected wicketsData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'wickets',
      },
      {
        data: [],
        label: 'matches',
      },
      {
        data: [],
        label: '5w',
        hidden: true,
      },
    ],
  };

  constructor(private readonly _service: DataFetchService) {}

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service
      .getWicketsByTeamSeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          (this.wicketsData.labels = data.chartLabels),
            (this.wicketsData.datasets[0].data = data.chartData[0]),
            (this.wicketsData.datasets[1].data = data.chartData[1]),
            (this.wicketsData.datasets[2].data = data.chartData[2]);
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.loaded.set(true);
  }

  protected toggle5w(): void {
    if (this.wicketsData?.datasets[2].hidden) {
      this.wicketsData.datasets[2].hidden = false;
      this.chart()?.update();
      this.btnText.set('Hide 5w');
    } else {
      this.wicketsData.datasets[2].hidden = true;
      this.chart()?.update();
      this.btnText.set('Show 5w');
    }
  }

  protected barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    indexAxis: 'y',
    // plugins: {
    //   datalabels: {
    //     align: 'end',
    //     anchor: 'end'
    //   },
    //   legend: {
    //     position: 'bottom'
    //   }
    // title: {
    //   display: true,
    //   text: 'Matches and wickets taken by opponent'
    // },
    // subtitle: {
    //   display: true,
    //   text: 'JM Anderson',
    // }
    // }
  };
}
