import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { WicketsMatchComponent } from '../wickets-match/wickets-match.component';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { BowlingAveTabsComponent } from '../average/bowling-ave-tabs/bowling-ave-tabs.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { GroundsTabsComponent } from '../grounds/grounds-tabs/grounds-tabs.component';
import { AveHomeAwayComponent } from '../home_away/ave-home-away/ave-home-away.component';
import { InningsBarComponent } from '../innings-bar/innings-bar.component';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { YearBarComponent } from '../year-bar/year-bar.component';

@Component({
  selector: 'app-charts-stepper',
  imports: [
    MatStepperModule,
    MatButtonModule,
    WicketsMatchComponent,
    StrikeRateComponent,
    EconomyRateComponent,
    BowlingAveTabsComponent,
    WicketsOpponentBarComponent,
    GroundsTabsComponent,
    AveHomeAwayComponent,
    InningsBarComponent,
    AveStrikeMultiAxisLineComponent,
    YearBarComponent,
  ],
  templateUrl: './charts-stepper.component.html',
  styleUrl: './charts-stepper.component.scss',
})
export class ChartsStepperComponent {}
