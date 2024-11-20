import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AveHomeAwayComponent } from "../ave-home-away/ave-home-away.component";

@Component({
    selector: 'app-home-away-tabs',
    imports: [MatTabsModule, AveHomeAwayComponent],
    templateUrl: './home-away-tabs.component.html',
    styleUrl: './home-away-tabs.component.scss'
})
export class HomeAwayTabsComponent { }