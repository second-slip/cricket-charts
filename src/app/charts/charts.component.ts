import { Component } from '@angular/core';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { WicketsMatchComponent } from '../wickets-match/wickets-match.component';
import { YearBarComponent } from '../year-bar/year-bar.component';
import { InningsBarComponent } from '../innings-bar/innings-bar.component';
import { AveHomeAwayComponent } from '../home_away/ave-home-away/ave-home-away.component';
import { HomeAwayTabsComponent } from '../home_away/home-away-tabs/home-away-tabs.component';
import { HomeGroundsBarComponent } from '../grounds/home-grounds-bar/home-grounds-bar.component';
import { GroundsTabsComponent } from '../grounds/grounds-tabs/grounds-tabs.component';
import { BowlingAveTabsComponent } from '../average/bowling-ave-tabs/bowling-ave-tabs.component';

@Component({
  selector: 'app-charts',
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
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {}
