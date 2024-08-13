import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataFetchService } from '../../data-fetch.service';
import { IGroundAnalysisBar } from '../i-ground-analysis-bar';

@Component({
  selector: 'app-home-grounds-bar',
  standalone: true,
  imports: [BaseChartDirective, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './home-grounds-bar.component.html',
  styleUrl: './home-grounds-bar.component.scss'
})
export class HomeGroundsBarComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    this.chart?.chart?.resize();
  }

  public chartPlugins = [ChartDataLabels];
  public btnText = signal('Show 5w');
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
        label: 'fiveWickets',
        hidden: true
      }
    ]
  };

  constructor(private readonly _service: DataFetchService) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getHomeGroundsData()
      .pipe()
      .subscribe({
        next: (data: IGroundAnalysisBar) => {
          // const i = this.wicketsData.datasets.findIndex(f => f.label === 'wickets');
          // alert(i);
          this.wicketsData.labels = data.labels,
            this.wicketsData.datasets[0].data = data.wickets,
            this.wicketsData.datasets[1].data = data.matches,
            this.wicketsData.datasets[2].data = data.fiveWickets
        },
        error: (e) => { console.log(e); }
      });

    this.loaded.set(true);
  }

  public toggle5w(): void {
    if (this.wicketsData?.datasets[2].hidden) {
      this.wicketsData.datasets[2].hidden = false;
      this.chart?.update();
      this.btnText.set('Hide 5w');
    } else {
      this.wicketsData.datasets[2].hidden = true;
      this.chart?.update();
      this.btnText.set('Show 5w');
    }
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 4,
    indexAxis: 'y',
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end'
      },
      legend: {
        position: 'bottom'
      }
    }
  };
}