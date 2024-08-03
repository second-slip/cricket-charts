import { Component } from '@angular/core';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { WktsMatchComponent } from '../wkts-match/wkts-match.component';
import { BowlingAveTabsComponent } from '../bowling-ave-tabs/bowling-ave-tabs.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    EconomyRateComponent,
    StrikeRateComponent,
    WktsMatchComponent,
    BowlingAveTabsComponent,
    AveStrikeMultiAxisLineComponent,
    AveStrikeMultiAxisLineComponent,
    WicketsOpponentBarComponent
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent { }