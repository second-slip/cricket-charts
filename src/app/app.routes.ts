import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { IdeasComponent } from './ideas/ideas.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: ChartsComponent, pathMatch: 'full' },
    { path: 'home', component: ChartsComponent, pathMatch: 'full' },
    { path: 'ideas', component: IdeasComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
