import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-strike-rate',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './strike-rate.component.html',
  styleUrl: './strike-rate.component.css'
})
export class StrikeRateComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public chartPlugins = [ChartDataLabels];
  public loaded = signal(false);

  public bowlingStrikeData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'cumulative strke rate'
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getCumulativeStrikeRateSeries()
      .pipe()
      .subscribe({
        next: (data: IChartData) => {
          this.bowlingStrikeData.labels = data.chartLabels,
            this.bowlingStrikeData.datasets[0].data = data.chartData[0]
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public remove(): void {
    // this.data.chartData[0].data.splice(0, 14);
    // this.data.chartLabels.splice(0, 14);
    this.chart?.update();
  }


  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
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
        // {
        //   // console.log(ctx.dataIndex)
        //   if (ctx.dataIndex === this.data.chartData[0].data.length - 1) {
        //     return val;
        //   } else {
        //     return '';
        //   }
        // }
      },
      title: {
        display: true,
        text: 'JM Anderson'
      },
      subtitle: {
        display: true,
        text: 'Strike rate',
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