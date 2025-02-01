import { Component } from '@angular/core';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { BowlingAveTabsComponent } from '../average/bowling-ave-tabs/bowling-ave-tabs.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { GroundsTabsComponent } from '../grounds/grounds-tabs/grounds-tabs.component';
import { HomeAwayTabsComponent } from '../home_away/home-away-tabs/home-away-tabs.component';
import { InningsBarComponent } from '../innings-bar/innings-bar.component';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { WicketsMatchComponent } from '../wickets-match/wickets-match.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { YearBarComponent } from '../year-bar/year-bar.component';

@Component({
  selector: 'app-charts-classic',
  imports: [
        BowlingAveTabsComponent,
        EconomyRateComponent,
        StrikeRateComponent,
        WicketsMatchComponent,
        AveStrikeMultiAxisLineComponent,
        AveStrikeMultiAxisLineComponent,
        WicketsOpponentBarComponent,
        YearBarComponent,
        InningsBarComponent,
        HomeAwayTabsComponent,
        GroundsTabsComponent,
  ],
  templateUrl: './charts-classic.component.html'
})
export class ChartsClassicComponent { }