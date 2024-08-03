import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { DataFetchService } from '../data-fetch.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-age-analysis-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './age-analysis-line.component.html',
  styleUrl: './age-analysis-line.component.scss'
})
export class AgeAnalysisLineComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }

  public loaded = signal(false);
  public ageAnalysisData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'up to 35 years old'
      },
      {
        data: [],
        label: 'over 35 years old'
      },
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getAgeAnalysis()
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
          this.ageAnalysisData.labels = data.chartLabels
          this.ageAnalysisData.datasets[0].data = data.chartData[0],
            this.ageAnalysisData.datasets[1].data = data.chartData[1]
        },
        error: (e) => { console.log(e); }
      });


    this.loaded.set(true);
  }


  // constructor() {
  //   this.data = {
  //     chartData: [
  //       {
  //         data: [14.60, 27.60, 24.00, 20.27, 28.64, 29.33, 31.57, 28.63, 26.71, 28.36, 29.57, 30.64, 31.58, 34.85, 36.27, 34.50, 35.00, 35.76, 37.00, 34.09, 35.49, 36.40, 33.69, 33.00, 35.57, 36.86, 37.98, 38.51, 38.13, 38.39, 35.45, 35.68, 37.50, 37.93, 38.45, 37.73, 37.75, 39.21, 37.37, 37.12, 37.90, 38.77, 38.08, 37.92, 37.49, 37.29, 34.78, 34.62, 34.63, 34.73, 35.06, 35.06, 34.72, 34.98, 34.36, 34.52, 34.46, 34.61, 35.07, 35.22, 35.22, 35.73, 35.70, 35.86, 36.16, 35.44, 35.71, 35.43, 34.70, 33.91, 34.24, 33.63, 34.27, 33.61, 33.71, 34.34, 34.55, 34.88, 35.37, 34.90, 34.93, 34.86, 34.13, 34.10, 34.81, 34.43, 34.74, 34.80, 34.27, 33.58, 32.53, 31.92, 32.08, 32.16, 32.03, 31.91, 31.76, 31.94, 32.02, 31.62, 31.77, 31.60, 31.77, 31.36, 31.55, 31.26, 31.11, 30.98, 30.98, 30.95, 31.04, 31.15, 30.75, 30.83, 30.65, 30.69, 30.53, 30.48, 30.58, 30.62, 30.64, 30.58, 30.62, 30.39, 30.47, 30.15, 30.26, 30.14, 30.17, 30.16, 30.30, 30.35, 30.06, 30.38, 30.38, 30.41, 30.36, 30.40, 30.56, 30.60, 30.71, 30.74, 30.73, 30.54, 30.40, 30.45, 30.47, 30.46, 30.52, 30.62, 30.27, 30.14, 30.16, 30.15, 29.94, 29.70, 29.68, 29.67, 30.03, 29.96, 29.98, 30.20, 30.12, 30.11, 30.13, 30.35, 30.52, 30.39, 30.39, 30.70, 30.54, 30.61, 30.72, 30.68, 30.68, 30.40, 30.37, 30.37, 30.46, 30.50, 30.33, 30.46, 30.19, 30.09, 29.97, 29.86, 29.84, 29.72, 29.74, 29.78, 29.74, 29.55, 29.21, 29.22, 29.37, 29.37, 29.33, 29.43, 29.32, 29.40, 29.64, 29.73, 29.42, 29.38, 29.34, 29.27, 29.30, 29.21, 28.97, 28.96, 29.07, 29.14, 29.14, 29.28, 29.19, 28.89, 28.63, 28.52, 28.33, 28.34, 28.34, 28.33, 28.24, 28.23, 28.18, 28.29, 28.29, 28.24, 28.25, 28.35, 28.37, 28.50, 28.47, 28.45, 28.30, 28.27, 28.15, 28.20, "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL"],
  //         label: 'up to 35'
  //       },
  //       {
  //         data: ["NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", 28.05, 27.91, 27.81, 27.72, 27.59, 27.74, 27.69, 27.39, 27.38, 27.44, 27.53, 27.34, 27.36, 27.31, 27.35, 27.41, 27.41, 27.35, 27.37, 27.37, 27.34, 27.27, 27.23, 27.21, 27.20, 26.99, 26.83, 26.80, 26.85, 26.94, 26.91, 26.91, 26.84, 26.84, 26.89, 26.96, 26.98, 26.83, 26.93, 26.96, 26.98, 27.03, 26.94, 26.94, 26.94, 27.01, 27.05, 26.88, 26.83, 26.80, 26.87, 26.83, 26.86, 26.92, 26.98, 26.94, 26.81, 26.80, 26.60, 26.61, 26.60, 26.49, 26.53, 26.53, 26.47, 26.52, 26.59, 26.65, 26.67, 26.59, 26.61, 26.49, 26.58, 26.46, 26.52, 26.54, 26.63, 26.63, 26.60, 26.49, 26.53, 26.58, 26.52, 26.53, 26.50, 26.45, 26.34, 26.37, 26.41, 26.34, 26.26, 26.25, 26.22, 26.26, 26.16, 26.14, 26.13, 26.07, 25.94, 25.88, 26.00, 26.03, 26.12, 26.16, 26.21, 26.25, 26.29, 26.35, 26.43, 26.38, 26.35, 26.40, 26.51, 26.50, 26.52, 26.53, 26.53, 26.46],
  //         label: '35+'
  //       },
  //     ],
  //     chartLabels: ["2003-05-22", "2003-05-22", "2003-06-05", "2003-06-05", "2003-07-24", "2003-07-24", "2003-07-31", "2003-08-14", "2003-08-14", "2003-08-21", "2003-08-21", "2003-09-04", "2003-09-04", "2003-12-18", "2004-07-29", "2004-07-29", "2004-08-12", "2004-08-12", "2004-08-19", "2004-08-19", "2005-01-13", "2005-01-13", "2006-03-18", "2006-03-18", "2006-11-23", "2006-11-23", "2006-12-01", "2006-12-01", "2007-01-02", "2007-01-02", "2007-07-19", "2007-07-19", "2007-07-27", "2007-07-27", "2007-08-09", "2007-08-09", "2007-12-01", "2007-12-01", "2008-03-13", "2008-03-13", "2008-03-22", "2008-03-22", "2008-05-15", "2008-05-15", "2008-05-23", "2008-05-23", "2008-06-05", "2008-06-05", "2008-07-10", "2008-07-10", "2008-07-18", "2008-07-18", "2008-07-30", "2008-07-30", "2008-08-07", "2008-08-07", "2008-12-11", "2008-12-11", "2008-12-19", "2008-12-19", "2009-02-13", "2009-02-15", "2009-02-15", "2009-02-26", "2009-03-06", "2009-03-06", "2009-05-06", "2009-05-06", "2009-05-14", "2009-05-14", "2009-07-08", "2009-07-16", "2009-07-16", "2009-07-30", "2009-07-30", "2009-08-07", "2009-08-20", "2009-08-20", "2009-12-16", "2009-12-16", "2009-12-26", "2009-12-26", "2010-01-03", "2010-01-03", "2010-01-14", "2010-05-27", "2010-05-27", "2010-06-04", "2010-06-04", "2010-07-29", "2010-07-29", "2010-08-06", "2010-08-06", "2010-08-18", "2010-08-18", "2010-08-26", "2010-08-26", "2010-11-25", "2010-11-25", "2010-12-03", "2010-12-03", "2010-12-16", "2010-12-16", "2010-12-26", "2010-12-26", "2011-01-03", "2011-01-03", "2011-05-26", "2011-05-26", "2011-06-16", "2011-06-16", "2011-07-21", "2011-07-21", "2011-07-29", "2011-07-29", "2011-08-10", "2011-08-10", "2011-08-18", "2011-08-18", "2012-01-17", "2012-01-17", "2012-01-25", "2012-01-25", "2012-02-03", "2012-02-03", "2012-03-26", "2012-03-26", "2012-04-03", "2012-04-03", "2012-05-17", "2012-05-17", "2012-05-25", "2012-05-25", "2012-07-19", "2012-08-02", "2012-08-02", "2012-08-16", "2012-08-16", "2012-11-15", "2012-11-15", "2012-11-23", "2012-11-23", "2012-12-05", "2012-12-05", "2012-12-13", "2013-03-06", "2013-03-14", "2013-03-14", "2013-03-22", "2013-03-22", "2013-05-16", "2013-05-16", "2013-05-24", "2013-05-24", "2013-07-10", "2013-07-10", "2013-07-18", "2013-07-18", "2013-08-01", "2013-08-01", "2013-08-09", "2013-08-09", "2013-08-21", "2013-08-21", "2013-11-21", "2013-11-21", "2013-12-05", "2013-12-05", "2013-12-13", "2013-12-13", "2013-12-26", "2013-12-26", "2014-01-03", "2014-01-03", "2014-06-12", "2014-06-12", "2014-06-20", "2014-06-20", "2014-07-09", "2014-07-09", "2014-07-17", "2014-07-17", "2014-07-27", "2014-07-27", "2014-08-07", "2014-08-07", "2014-08-15", "2014-08-15", "2015-04-13", "2015-04-13", "2015-04-21", "2015-04-21", "2015-05-01", "2015-05-01", "2015-05-21", "2015-05-21", "2015-05-29", "2015-05-29", "2015-07-08", "2015-07-08", "2015-07-16", "2015-07-16", "2015-07-29", "2015-07-29", "2015-10-13", "2015-10-13", "2015-10-22", "2015-10-22", "2015-11-01", "2015-11-01", "2016-01-02", "2016-01-14", "2016-01-14", "2016-01-22", "2016-01-22", "2016-05-19", "2016-05-19", "2016-05-27", "2016-05-27", "2016-06-09", "2016-06-09", "2016-07-22", "2016-07-22", "2016-08-03", "2016-08-03", "2016-08-11", "2016-08-11", "2016-11-17", "2016-11-17", "2016-11-26", "2016-11-26", "2016-12-08", "2017-07-06", "2017-07-06", "2017-07-14", "2017-07-14", "2017-07-27", "2017-07-27", "2017-08-04", "2017-08-04", "2017-08-17", "2017-08-17", "2017-08-25", "2017-08-25", "2017-09-07", "2017-09-07", "2017-11-23", "2017-11-23", "2017-12-02", "2017-12-02", "2017-12-14", "2017-12-26", "2017-12-26", "2018-01-04", "2018-03-22", "2018-03-30", "2018-03-30", "2018-05-24", "2018-05-24", "2018-06-01", "2018-06-01", "2018-08-01", "2018-08-01", "2018-08-09", "2018-08-09", "2018-08-18", "2018-08-18", "2018-08-30", "2018-08-30", "2018-09-07", "2018-09-07", "2018-11-06", "2018-11-06", "2018-11-14", "2018-11-14", "2019-01-23", "2019-01-23", "2019-01-31", "2019-01-31", "2019-02-09", "2019-02-09", "2019-08-01", "2019-08-01", "2019-12-26", "2019-12-26", "2020-01-03", "2020-01-03", "2020-07-08", "2020-07-08", "2020-07-24", "2020-07-24", "2020-08-05", "2020-08-05", "2020-08-13", "2020-08-21", "2020-08-21", "2021-01-22", "2021-01-22", "2021-02-05", "2021-02-05", "2021-02-24", "2021-02-24", "2021-03-04", "2021-06-02", "2021-06-02", "2021-06-10", "2021-06-10", "2021-08-04", "2021-08-04", "2021-08-12", "2021-08-12", "2021-08-25", "2021-08-25", "2021-09-02", "2021-09-02", "2021-12-16", "2021-12-16", "2021-12-26", "2022-01-05", "2022-01-05", "2022-06-02", "2022-06-02", "2022-06-10", "2022-06-10", "2022-07-01", "2022-07-01", "2022-08-17", "2022-08-25", "2022-08-25", "2022-09-08", "2022-09-08", "2022-12-01", "2022-12-01", "2022-12-09", "2022-12-09", "2023-02-16", "2023-02-16", "2023-02-24", "2023-02-24", "2023-06-16", "2023-06-16", "2023-06-28", "2023-06-28", "2023-07-19", "2023-07-19", "2023-07-27", "2023-07-27", "2024-02-02", "2024-02-02", "2024-02-15", "2024-02-15", "2024-02-23", "2024-02-23", "2024-03-07", "2024-07-10", "2024-07-10"]
  //   }
  // }

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    devicePixelRatio: 4,
    plugins: {
      legend: {
        position: 'bottom'
      }
      // title: {
      //   display: true,
      //   text: 'Cumulative average pre- and post-35 years old'
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
