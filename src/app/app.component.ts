import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgeAnalysisLineComponent } from './age-analysis-line/age-analysis-line.component';
import { AveStrikeMultiAxisLineComponent } from './ave-strike-multi-axis-line/ave-strike-multi-axis-line.component';
import { EconomyRateComponent } from './economy-rate/economy-rate.component';
import { FormatAnalysisLineComponent } from './format-analysis-line/format-analysis-line.component';
import { StrikeRateComponent } from './strike-rate/strike-rate.component';
import { WktsMatchComponent } from './wkts-match/wkts-match.component';
import { WicketsOpponentBarComponent } from './wickets-opponent-bar/wickets-opponent-bar.component';
import { CumulativeAveLineComponent } from './cumulative-ave-line/cumulative-ave-line.component';
import { AngularLogoComponent } from "./angular-logo/angular-logo.component";
import { FooterComponent } from "./footer/footer.component";
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EconomyRateComponent,
    StrikeRateComponent,
    WktsMatchComponent,
    AgeAnalysisLineComponent,
    FormatAnalysisLineComponent,
    AveStrikeMultiAxisLineComponent,
    AveStrikeMultiAxisLineComponent,
    WicketsOpponentBarComponent,
    CumulativeAveLineComponent,
    AngularLogoComponent,
    FooterComponent,
    MatIconModule,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cricket-charts';
}
