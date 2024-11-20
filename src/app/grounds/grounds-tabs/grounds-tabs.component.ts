import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeGroundsBarComponent } from "../home-grounds-bar/home-grounds-bar.component";

@Component({
    selector: 'app-grounds-tabs',
    imports: [MatTabsModule, HomeGroundsBarComponent],
    templateUrl: './grounds-tabs.component.html',
    styleUrl: './grounds-tabs.component.scss'
})
export class GroundsTabsComponent { }