import { Component, signal, viewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-wickets-match',
  imports: [
    BaseChartDirective,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  host: {
    '(window:resize)': '_onResize($event)', //,
  },
  templateUrl: './wickets-match.component.html',
})
export class WicketsMatchComponent {
  readonly chart = viewChild(BaseChartDirective);

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  private _onResize(event: any): void {
    // alert(event.target.innerWidth);
    this.chart()?.chart?.resize();
  }

  protected  btnText = signal('Hide wickets');
  protected  hideDelay = 2000;
  protected  loaded = signal(false);

  protected  formatAnalysisData: IChartData = {
    // ChartData<'bar'>
    chartLabels: [],
    chartData: [
      {
        data: [],
        label: 'wickets in match',
        // borderColor: Utils.CHART_COLORS.red,
        // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        // stack: 'combined',
        type: 'bar',
        order: 1,
      },
      {
        data: [],
        label: 'cumulative trend',
        // borderColor: Utils.CHART_COLORS.blue,
        // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        type: 'line',
        order: 0,
      },
    ],
  };

  constructor(private readonly _service: DataFetchService) {}

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getWicketsPerMatchDataSeries().subscribe({
      next: (data: IChartData) => {
        (this.formatAnalysisData.chartLabels = data.chartLabels),
          (this.formatAnalysisData.chartData[0].data = data.chartData[0]),
          (this.formatAnalysisData.chartData[1].data = data.chartData[1]);
      },
      error: (e) => {
        console.log(e);
      },
    });

    this.loaded.set(true);
  }

  protected  toggleBar(): void {
    if (this.formatAnalysisData.chartData[0].hidden) {
      this.formatAnalysisData.chartData[0].hidden = false;
      this.chart()?.update();
      this.btnText.set('Hide wickets');
    } else {
      this.formatAnalysisData.chartData[0].hidden = true;
      this.chart()?.update();
      this.btnText.set('Show wickets');
    }
  }

  protected  toggleFullscreen(): void {
    var chartEle = document.getElementById('gh');

    if (document.fullscreenElement || document.fullscreenElement) {
      document?.exitFullscreen();
      console.log('exit fullscreen');
    } else {
      // @ts-ignore
      screen.orientation.lock('landscape-primary');
      chartEle?.requestFullscreen();
      console.log('enter fullscreen');
    }
  }

  protected  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    devicePixelRatio: 4,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          align: 'center',
          text: 'wickets per match',
        },
        stacked: false,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      // title: {
      //   display: true,
      //   text: 'Wickets per Test match',
      //   font: {
      //     size: 24,
      //     family: "Roboto",
      //     // style: 'normal',
      //     // weight: 'normal'
      //   }
      // },
      // subtitle: {
      //   display: true,
      //   text: 'JM Anderson',
      //   // color: 'blue',
      //    font: {
      //     family: "Roboto",
      //   //   size: 12,
      //   //   family: 'tahoma',
      //   //   weight: 'normal',
      //   //   style: 'italic'
      //    }
      // }
    },
  };
}
