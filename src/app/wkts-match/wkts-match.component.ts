import { Component, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-wkts-match',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './wkts-match.component.html',
  styleUrl: './wkts-match.component.css'
})
export class WktsMatchComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public btnText = signal('show 5w count');
  public loaded = signal(false);

  public formatAnalysisData: IChartData = {  // ChartData<'bar'>
    chartLabels: [],
    chartData: [
      {
        data: [],
        label: 'wickets per match',
        // borderColor: Utils.CHART_COLORS.red,
        // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        // stack: 'combined',
        type: 'bar',
        order: 1
      },
      {
        data: [],
        label: 'cumul wickets per match',
        // borderColor: Utils.CHART_COLORS.blue,
        // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        type: 'line',
        order: 0
      },
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getWicketsPerMatchDataSeries()
      .subscribe({
        next: (data: IChartData) => {
          this.formatAnalysisData.chartLabels = data.chartLabels,
            this.formatAnalysisData.chartData[0].data = data.chartData[0],
            this.formatAnalysisData.chartData[1].data = data.chartData[1]
        },
        error: (e) => { console.log(e); }
      });


    this.loaded.set(true);
  }

  public toggleBar(): void {
    if (this.formatAnalysisData.chartData[0].hidden) {
      this.formatAnalysisData.chartData[0].hidden = false;
      this.chart?.update();
      this.btnText.set('hide 5w count');
    } else {
      this.formatAnalysisData.chartData[0].hidden = true;
      this.chart?.update();
      this.btnText.set('show 5w count');
    }
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        stacked: false
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Wickets per Test match'
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