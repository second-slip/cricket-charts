import { Component } from '@angular/core';
import { AgeAnalysisLineComponent } from '../age-analysis-line/age-analysis-line.component';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { CumulativeAveLineComponent } from '../cumulative-ave-line/cumulative-ave-line.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { FormatAnalysisLineComponent } from '../format-analysis-line/format-analysis-line.component';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { WktsMatchComponent } from '../wkts-match/wkts-match.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    EconomyRateComponent,
    StrikeRateComponent,
    WktsMatchComponent,
    AgeAnalysisLineComponent,
    FormatAnalysisLineComponent,
    AveStrikeMultiAxisLineComponent,
    AveStrikeMultiAxisLineComponent,
    WicketsOpponentBarComponent,
    CumulativeAveLineComponent,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {

}
