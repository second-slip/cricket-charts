import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CumulativeAveLineComponent } from "../cumulative-ave-line/cumulative-ave-line.component";
import { FormatAnalysisLineComponent } from "../format-analysis-line/format-analysis-line.component";
import { AgeAnalysisLineComponent } from "../age-analysis-line/age-analysis-line.component";

@Component({
  selector: 'app-bowling-ave-tabs',
  standalone: true,
  imports: [MatTabsModule, CumulativeAveLineComponent, FormatAnalysisLineComponent, AgeAnalysisLineComponent],
  templateUrl: './bowling-ave-tabs.component.html',
  styleUrl: './bowling-ave-tabs.component.scss'
})
export class BowlingAveTabsComponent { }