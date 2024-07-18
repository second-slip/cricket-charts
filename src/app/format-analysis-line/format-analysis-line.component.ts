import { Component, signal } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-format-analysis-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './format-analysis-line.component.html',
  styleUrl: './format-analysis-line.component.css'
})
export class FormatAnalysisLineComponent {
  public loaded = signal(false);
  public formatAnalysisData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'pre-Test specialisation'
      },
      {
        data: [],
        label: 'post-Test specialisation'
      },
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getFormatAnalysis()
      // .pipe(
      //   map((x: any) => {
      //     const numbers = x.chartData[0];
      //     const numbersTimesTen = numbers.map((number: any) => 
      //     {
      //       if (number === "NULL") { return null}
      //       else {
      //         return number
      //       }
      //     }
      //     );
      //     // console.log(numbersTimesTen)
      //     x.chartData[0] = numbersTimesTen;
      //     return x
      //   }
      //   ))
      .subscribe({
        next: (data: IChartData) => {
          console.log(data)
          this.formatAnalysisData.labels = data.chartLabels
          this.formatAnalysisData.datasets[0].data = data.chartData[0],
            this.formatAnalysisData.datasets[1].data = data.chartData[1]
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
        text: 'Bowling cumulative average pre- & post- first-class specialisation'
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