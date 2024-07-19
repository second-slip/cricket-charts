import { Component, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFetchService } from '../data-fetch.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wickets-opponent-bar',
  standalone: true,
  imports: [BaseChartDirective, MatButtonModule, MatIconModule],
  templateUrl: './wickets-opponent-bar.component.html',
  styleUrl: './wickets-opponent-bar.component.css'
})
export class WicketsOpponentBarComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public chartPlugins = [ChartDataLabels];
  public btnText = signal('show 5w count');
  public loaded = signal(false);

  public wicketsData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'wickets'
      },
      {
        data: [],
        label: 'matches'
      },
      {
        data: [],
        label: '5w',
        hidden: true
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getWicketsByTeamSeries()
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

  public toggle5w(): void {
    if (this.wicketsData?.datasets[2].hidden) {
      this.wicketsData.datasets[2].hidden = false;
      this.chart?.update();
      this.btnText.set('hide 5w count');
    } else {
      this.wicketsData.datasets[2].hidden = true;
      this.chart?.update();
      this.btnText.set('show 5w count');
    }
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end'
      },
      title: {
        display: true,
        text: 'Matches and wickets taken by opponent'
      },
      subtitle: {
        display: true,
        text: 'JM Anderson',
        // color: 'blue',
        // font: {
        //   size: 12,
        //   family: 'tahoma',
        //   weight: 'normal',
        //   style: 'italic'
        // }
      }
    }
  };
}