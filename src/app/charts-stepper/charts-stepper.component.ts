import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { WicketsMatchComponent } from "../wickets-match/wickets-match.component";
import { StrikeRateComponent } from "../strike-rate/strike-rate.component";
import { EconomyRateComponent } from "../economy-rate/economy-rate.component";

@Component({
  selector: 'app-charts-stepper',
  imports: [MatStepperModule, MatButtonModule, WicketsMatchComponent, StrikeRateComponent, EconomyRateComponent],
  templateUrl: './charts-stepper.component.html',
  styleUrl: './charts-stepper.component.scss',
})
export class ChartsStepperComponent {}
