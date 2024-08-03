import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-format-analysis-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './format-analysis-line.component.html',
  styleUrl: './format-analysis-line.component.scss'
})
export class FormatAnalysisLineComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }
  
  public loaded = signal(false);
  public formatAnalysisData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'All-formats player'
      },
      {
        data: [],
        label: 'First-class only player'
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
          this.formatAnalysisData.labels = data.chartLabels
          this.formatAnalysisData.datasets[0].data = data.chartData[0],
            this.formatAnalysisData.datasets[1].data = data.chartData[1]
        },
        error: (e) => { console.log(e); }
      });


    this.loaded.set(true);
  }


  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom'
      }
      // title: {
      //   display: true,
      //   text: 'Cumulative average pre- & post- first-class specialisation'
      // },
      // subtitle: {
      //   display: true,
      //   text: 'JM Anderson',
      // }
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