import { Component, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { StrikeRateComponent } from '../strike-rate/strike-rate.component';
import { WicketsMatchComponent } from '../wickets-match/wickets-match.component';
import { WicketsOpponentBarComponent } from '../wickets-opponent-bar/wickets-opponent-bar.component';
import { EconomyRateComponent } from '../economy-rate/economy-rate.component';
import { GroundsTabsComponent } from '../grounds/grounds-tabs/grounds-tabs.component';
import { BowlingAveTabsComponent } from '../average/bowling-ave-tabs/bowling-ave-tabs.component';
import { HomeAwayTabsComponent } from '../home_away/home-away-tabs/home-away-tabs.component';
import { InningsBarComponent } from '../innings-bar/innings-bar.component';
import { AveStrikeMultiAxisLineComponent } from '../ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { YearBarComponent } from '../year-bar/year-bar.component';

@Component({
  selector: 'app-charts-accordion',
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    WicketsMatchComponent,
    StrikeRateComponent,
    BowlingAveTabsComponent,
    WicketsOpponentBarComponent,
    EconomyRateComponent,
    GroundsTabsComponent,
    HomeAwayTabsComponent,
    InningsBarComponent,
    AveStrikeMultiAxisLineComponent,
    YearBarComponent,
  ],
  templateUrl: './charts-accordion.component.html',
  styleUrl: './charts-accordion.component.scss',
})
export class ChartsAccordionComponent {
  accordion = viewChild.required(MatAccordion);
}
